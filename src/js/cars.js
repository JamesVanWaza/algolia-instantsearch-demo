/** InstantSearch.JS */
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';

/** InstantsearchJS Widgets */
import { searchBox, hits, refinementList, breadcrumb, stats, sortBy, poweredBy } from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('N5OLC87R9A', '4ec613d58d623dba86b7fa0ca70cb116');

const search = instantsearch({
    indexName: 'TheCars',
    searchClient,
});

search.addWidgets([
    searchBox({
        container: '#cars',
        placeholder: 'Search for cars',
        autofocus: true
    }),

    hits({
        container: '#hits',
        templates: {
            item: `
                <article>
                    <h1>{{#helpers.highlight}}{ "attribute": "make" }{{/helpers.highlight}}</h1>
                    <img>{{#helpers.highlight}}{ "attribute": "image" }{{/helpers.highlight}}</img>
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