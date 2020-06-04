import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';
import path from 'path';

var cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname, '/build')))

app.use(cors());

app.use(bodyParser.json());

const withDB = async (operations, res) => {
    try {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
})

app.listen(8000, () => console.log('listening on port 8000'));

