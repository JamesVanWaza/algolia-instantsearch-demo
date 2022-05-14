/** Algolia JS **/
import algoliasearch from 'algoliasearch/lite';

/** InstantsearchJS */
import instantsearch from 'instantsearch.js';

/** InstantsearchJS Widgets */
import { searchBox, hits, refinementList, breadcrumb, stats, sortBy, poweredBy } from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('N5OLC87R9A', '4ec613d58d623dba86b7fa0ca70cb116');

const search = instantsearch({
    indexName: 'TheAirlines',
    searchClient,
});

search.addWidgets([
    searchBox({
        container: '#airlines',
        placeholder: 'Search for airlines',
        autofocus: true
    }),

    hits({
        container: '#hits',
        templates: {
            item: `
            <article>
                <h1>{{#helpers.highlight}}{ "attribute": "airline" }{{/helpers.highlight}}</h1>
            </article`
        }
    }),

    stats({
        container: '#stats'
    }),

    poweredBy({
        container: '#powered-by'
    }),

    refinementList({
        container: '#refinement-list',
        attribute: 'alliance',
    })
]);

search.start();