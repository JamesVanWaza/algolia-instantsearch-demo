/** InstantSearch.JS */
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';

/** InstantsearchJS Widgets */
import { searchBox, hits, breadcrumb, stats, sortBy, poweredBy } from 'instantsearch.js/es/widgets';

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
        // Learn how to template the pages
        // templates: {
        //     item: `
        //             <div>
        //             <div class="hit-name">
        //                 {{#helpers.highlight}}{ "attribute": "airline" }{{/helpers.highlight}}
        //             </div>
        //             <div class="hit-description">
        //                 {{#helpers.highlight}}{ "attribute": "alliance" }{{/helpers.highlight}}
        //             </div>
        //             </div>
        //         `,
        // },
    }),

    stats({
        container: '#stats'
    }),

    poweredBy({
        container: '#powered-by'
    })
]);

search.start();