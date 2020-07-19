/** Algolia JS **/
import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import {
    searchBox,
    hits
} from 'instantsearch.js/es/widgets';

const client = algoliasearch('O966BSY3LD', '6db67900bfa16b4173055f87526117a7');

const index = client.initIndex('TheContacts');
const contactsJSON = require('../json/contacts.json');

index.saveObjects(contactsJSON, {
    autoGenerateObjectIDIfNotExist: true
}).then(({ objectIDs }) => {
    console.log(objectIDs);
});

index.setSettings({
    'customRanking': ['desc(followers)']
}).then(() => {
    //  done
});

index.setSettings({
    searchableAttributes: [
        'lastname',
        'firstname',
        'company',
        'email',
        'city',
        'address'
    ]
}).then(() => {
    // done
});

// Search for a first name
index.search('jimmie').then(({ hits }) => {
    console.log(hits);
});

// Search for a first name with typo
index.search('jimie').then(({ hits }) => {
    console.log(hits);
});

// Search for a company
index.search('california paint').then(({ hits }) => {
    console.log(hits);
});

// Search for a first name and a company
index.search('jimmie paint').then(({ hits }) => {
    console.log(hits);
});

search.addWidgets([
    instantsearch.widgets.configure({
        hitsPerPage: 10
    })
]);

search.addWidgets([
    instantsearch.widgets.searchBox({
        container: "#search-box",
        placeholder: 'Search for contacts'
    }),
]);


search.addWidgets([
    instantsearch.widgets.hits({
        container: "#hits",
        templates: {
            item: document.getElementById('hit-template').innerHTML,
            empty: `We didn't find any results for the search <em>"{{query}}</em?>`
        }
    })
]);

search.start();