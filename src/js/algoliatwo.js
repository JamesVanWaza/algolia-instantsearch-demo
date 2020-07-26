/** Algolia JS **/
import algoliasearch from 'algoliasearch';

/** InstantsearchJS */
import instantsearch from 'instantsearch.js';

/** InstantsearchJS Widgets */
import {
    searchBox,
    hits
} from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');

const search = instantsearch({
    indexName: 'testing_manenos',
    searchClient,
});

search.addWidgets([
    searchBox({
        container: "#search-box"
    }),

    hits({
        container: "#hits"
    })
]);

search.start();