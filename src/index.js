/** Stylesheet **/
// import './css/style.css';
// import './css/algolia.min.css';

/** Algolia CSS **/
// import instantsearchcss from 'instantsearch.css';

/** HTML in JS **/
document.write("<h1>Hello Webpack!</h1>");
document.write('<div class="ais-InstantSearch"><h2>InstantSearch.js e-commerce demo</h2><div class="right-panel"><div id="searchbox"></div><div id="hits"></div><div id="pagination"></div></div></div>');
document.write("<h6>Attention:: All this code is coming from javascript - that's preety cool.</h6>");
document.write('<div id="image"></div>');
document.write('<nav><a href="index.html">Algolia Search Tutorials</a><a href="demo-ecommerce.html">Demo</a></nav>')

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