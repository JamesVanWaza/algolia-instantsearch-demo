/** Algolia JS **/
import algoliasearch from 'algoliasearch/lite';

/** InstantsearchJS */
import instantsearch from 'instantsearch.js';

/** InstantsearchJS Widgets */
import { searchBox, hits, refinementList, stats, hitsPerPage } from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('N5OLC87R9A', '4ec613d58d623dba86b7fa0ca70cb116');

const search = instantsearch({
    indexName: 'TheContacts',
    searchClient,
});

search.addWidgets([
    searchBox({
        container: '#contacts',
        placeholder: 'Search for contacts'
    }),

    hits({
        container: '#hits',
        templates: {
            item: `
                <article>
                    <h1>{{#helpers.highlight}}{ "attribute": "firstname"}{{/helpers.highlight}} 
                    {{#helpers.highlight}}{ "attribute": "lastname" }{{/helpers.highlight}}</h1>
                    <p>{{#helpers.highlight}}{ "attribute": "company" }{{/helpers.highlight}}</p>
                    <p>{{#helpers.highlight}}{ "attribute": "email" }{{/helpers.highlight}}</p>
                    <p>{{#helpers.highlight}}{ "attribute": "phone" }{{/helpers.highlight}}</p>
                    <p>{{#helpers.highlight}}{ "attribute": "address" }{{/helpers.highlight}}</p>
                    <p>{{#helpers.highlight}}{ "attribute": "city" }{{/helpers.highlight}}</p>
                    <p>{{#helpers.highlight}}{ "attribute": "postcode" }{{/helpers.highlight}}</p>
                    <p>{{#helpers.highlight}}{ "attribute": "country" }{{/helpers.highlight}}</p>
                </article>
            `
        }
    }),

    refinementList({
        container: '#refinement-list',
        attribute: 'brand',
        searchablePlaceholder: 'Search our products',
    }),

    stats({
        container: '#stats'
    }),

    hitsPerPage({
        container: '#hits-per-page',
        items: [
            { label: '12 hits per page', value: 12, default: true },
            { label: '24 hits per page', value: 24 },
        ],
    }),
]);

search.start();