const algoliasearch = require('algoliasearch');

const searchClient = algoliasearch(
	'latency',
	'6be0576ff61c053d5f9a3225e2a90f76'
);

const search = instantsearch({
	indexName: 'contacts_search',
	searchClient,
});

const index = client.initIndex('contacts');

const contactsJSON = require('./contacts.json');

index.save
