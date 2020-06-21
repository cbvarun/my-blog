import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';
import path from 'path';
import nodemailer from 'nodemailer';
import cors from 'cors';
import emailConfig from './emailconfig';

const compression = require('compression');
const http = require('http');
const https = require('https');
const fs = require('fs');

const credentials = {
    key: fs.readFileSync(__dirname + '/key.pem'),
    cert: fs.readFileSync(__dirname + '/cert.pem')
};

const app = express();

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

app.use(compression());
app.use(express.static(path.join(__dirname, '/build'), {
    extensions: ["html"],
    setHeaders(res, path) {
        if (path.match(/(\.html|\/sw\.js)$/)) {
            setNoCache(res);
            return;
        }

        if (path.match(/\.(js|css|png|PNG|jpg|jpeg|gif|ico|json)$/)) {
            setLongTermCache(res);
        }
    },
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.enable('trust proxy');


function setNoCache (res) {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    res.setHeader("Expires", date.toUTCString());
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Cache-Control", "public, no-cache");
  }
  
  function setLongTermCache (res) {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    res.setHeader("Expires", date.toUTCString());
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  }

var transport = {
    service: 'Gmail', // Don’t forget to replace with the SMTP host of your provider
    auth: {
        user: emailConfig.USER,
        pass: emailConfig.PASS
    }
}

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true});
        const db = client.db('my-blog');

        await operations(db);
        
        client.close();
    } catch(e) {
        console.log('error in withDB' + e);
        res.sendStatus(500).json({message: "something went wrong", error: e});
    }
 }
app.get('/api/articles/:name', (req, res) => {
    withDB(async(db) => {    
        console.log('get article');
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({name: articleName});
        res.json(articleInfo);
    }, res)    
})

app.post('/api/articles/:name/upvote', async (req, res) => {
    withDB(async(db) => {
        console.log('upvote article');
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({name: articleName});
        await db.collection('articles').updateOne({name: articleName}, {
            '$set' : {
                upvotes: articleInfo.upvotes + 1,
            }
        });

        const updatedArticleInfo = await db.collection('articles').findOne({name: articleName});

        res.json(updatedArticleInfo);
    }, res)    
});


app.post('/api/enquiry', async (req, res) => {
    console.log('reached enquiry form');
    const {name, email, message} = req.body;

    var content = `name: ${name} \n email: ${email} \n message: ${message} `;

    var mail = {
        from: name + ' - ' + email,
        to: 'cbvarun@yahoo.com',  // Change to email address that you want to receive messages on
        subject: 'New Message from Behon3st',
        text: content
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            });
            transporter.sendMail({
                from: "cbvarun@yahoo.com",
                to: email,
                subject: "Submission was successful",
                text: `Thank you for contacting us!\n\nForm details\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
            }, function (error, info) {
                if(error) {
                  console.log(error);
                } else{
                  console.log('Message sent: ' + info.response);
                }
            });            
        }
        transporter.close();
    });
});

app.post('/api/articles/:name/comment', async (req, res) => {
    withDB(async (db) => {
        console.log('add article comment');
        const {username, text} = req.body;
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({name: articleName});
        await db.collection('articles').updateOne({name: articleName}, {
            '$set': {
                comments: articleInfo.comments.concat({username, text})
            }
        })

        const updated = await db.collection('articles').findOne({name: articleName});

        res.json(updated);
    }, res)
});

app.use('*', (req, res, next) => {
    console.log("redirecting" + req.hostname + ' ' + req.url);
    if (req.secure) {
        setNoCache(res);
        res.sendFile(path.join(__dirname + '/build/index.html'));
        return next();
    }
    res.redirect(`https://${req.hostname}:443${req.url}`);
});

httpServer.listen(8000, () => console.log('listening on port 8000'));
httpsServer.listen(443, () => console.log('listening on port 443'));

