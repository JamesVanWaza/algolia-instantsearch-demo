/** Stylesheet **/
import '../scss/style.scss';

/** Algolia JS **/
import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import {
    searchBox,
    hits
} from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('O966BSY3LD', '6db67900bfa16b4173055f87526117a7');

const search = instantsearch({
    indexName: 'testing_manenos',
    searchClient,
});

search.addWidgets([
    searchBox({
        container: "#searchbox"
    }),

    hits({
        container: "#hits"
    })
]);

search.start();