/** Algolia JS **/
import algoliasearch from 'algoliasearch/lite';

/** InstantsearchJS */
import instantsearch from 'instantsearch.js';

/** InstantsearchJS Widgets */
import { searchBox, hits } from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('O966BSY3LD', '6db67900bfa16b4173055f87526117a7');

const search = instantsearch({
    indexName: 'TheContacts',
    searchClient,
});

search.addWidgets([
    searchBox({
        container: '#algolia',
    }),

    hits({
        container: '#hits',
    })
]);

search.start();