/** Algolia JS **/
import algoliasearch from 'algoliasearch';

/** InstantsearchJS */
import instantsearch from 'instantsearch.js';

/** InstantsearchJS Widgets */
import {
    searchBox,
    hits
} from 'instantsearch.js/es/widgets';

// Replace with your own values
const searchClient = algoliasearch(
    'O966BSY3LD',
    '3170c29718f691b99ff1c00d7317ef61' // search only API key, not admin API key
);

const search = instantsearch({
    indexName: 'TheCars',
    searchClient,
    routing: true,
});

search.addWidgets([
    instantsearch.widgets.configure({
        hitsPerPage: 10,
    })
]);

search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: 'Search for contacts',
    })
]);

search.addWidgets([
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            item: document.getElementById('hit-template').innerHTML,
            empty: `We didn't find any results for the search <em>"{{query}}"</em>`,
        },
    })
]);

search.start();