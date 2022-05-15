/** Algolia JS **/
import algoliasearch from 'algoliasearch/lite';

/** InstantsearchJS */
import instantsearch from 'instantsearch.js';

/** InstantsearchJS Widgets */
import { searchBox, hits, refinementList, breadcrumb, stats, sortBy, poweredBy } from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('QLO3A7VM8E', '56e6716fef81ba53100d9cab51ed8e7f');

const search = instantsearch({
    indexName: 'SoccerClubs',
    searchClient,
});

search.addWidgets([
    searchBox({
        container: '#soccerClubs',
        placeholder: 'Search for Soccer Clubs',
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