const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

const connectionString =
	'mongodb+srv://yoda:yodaTest@cluster0.njjos.mongodb.net/star-wars-quotes?retryWrites=true&w=majority';

MongoClient.connect(connectionString, { useUnifiedTopology: true })
	.then((client) => {
		const db = client.db('star-wars-quotes');
		const quotesCollection = db.collection('quotes');

		app.set('view engine', 'ejs');

		app.use(bodyParser.urlencoded({ extended: true }));

		app.listen(3000, function () {
			console.log('listening on 3000');
		});

		app.get('/', (req, res) => {
			db.collection('quotes')
				.find()
				.toArray()
				.then((results) => {
					res.render('index.ejs', { quotes: results });
				})
				.catch((error) => {
					console.error(error);
				});
		});

		app.post('/quotes', (req, res) => {
			quotesCollection
				.insertOne(req.body)
				.then((result) => {
					res.redirect('/');
				})
				.catch((error) => {
					console.error(error);
				});
			console.log(req.body);
		});

		console.log('Connected to Database');

		app.use(express.static('public'));
		app.use(bodyParser.json());
		app.put('/quotes', (req, res) => {
			quotesCollection
				.findOneAndUpdate(
					{ name: 'Yoda' },
					{
						$set: {
							name: req.body.name,
							quote: req.body.quote,
						},
					},
					{ upsert: true }
				)
				.then((result) => {
					res.json('Success');
				})
				.catch((error) => {
					console.error(error);
				});
		});
	})
	.catch((error) => {
		console.error(error);
	});
