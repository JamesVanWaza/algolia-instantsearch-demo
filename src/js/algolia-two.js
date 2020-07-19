/** Algolia JS **/
import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import {
    searchBox,
    hits
} from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('O966BSY3LD', '6db67900bfa16b4173055f87526117a7');

const search = instantsearch({
    indexName: 'testing_manenos_two',
    searchClient,
});


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

// search.addWidgets([
//     searchBox({
//         container: "#searchbox"
//     }),

//     hits({
//         container: "#hits"
//     })
// ]);

// search.start();