const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const Unsplash = require('unsplash-js').default;

require('es6-promise').polyfill();
require('isomorphic-fetch');

dotEnv.config();
const {
	MONGO_URI,
	UNSPLASH_ID,
	UNSPLASH_SECRET,
	UNSPLASH_CALLBACK_URL,
} = process.env;

mongoose.connect(MONGO_URI);

const unsplash = new Unsplash({
	applicationId: UNSPLASH_ID,
	secret: UNSPLASH_SECRET,
	callbackUrl: UNSPLASH_CALLBACK_URL,
	header: {
		'X-Custom-Header': 'Call Api',
	},
});

unsplash.search
	.photos('food', 2)
	.then(res => res.json())
	.then(json => {
		console.log('json', json);
	});
