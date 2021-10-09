/** Algolia JS **/
import algoliasearch from 'algoliasearch/lite';

/** InstantsearchJS */
import instantsearch from 'instantsearch.js';

/** InstantsearchJS Widgets */
import { searchBox, hits, stats, poweredBy, pagination, hitsPerPage } from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('N5OLC87R9A', '4ec613d58d623dba86b7fa0ca70cb116');

const search = instantsearch({
    indexName: 'KenyanStocks',
    searchClient,
});

search.addWidgets([
    searchBox({
        container: '#stocks',
        placeholder: 'Search for stocks',
    }),

    hits({
        container: '#hits',
        templates: {
            item: `
            <article>
                <h1>{{#helpers.highlight}}{ "attribute": "stockName" }{{/helpers.highlight}}</h1>
            </article`
        }
    }),

    stats({
        container: '#stats'
    }),

    poweredBy({
        container: '#powered-by'
    }),

    pagination({
        container: '#pagination'
    }),

    hitsPerPage({
        container: '#hits-per-page',
        items: [
            { label: '8 hits per page', value: 8, default: true },
            { label: '16 hits per page', value: 16 },
        ]
    })

]);

search.start();