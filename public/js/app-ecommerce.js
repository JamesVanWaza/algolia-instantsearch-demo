const searchClient = algoliasearch(
  'LLER32U6UG',
  '679d4923410abfac0793b37dccac1f3b'
);

const search = instantsearch({
  indexName: 'wp_demo',
  searchClient,
  searchFunction(helper) {
    if (helper.state.query) {
      helper.search();
    }
  },
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    limit: 5,
    showMore: true,
  }),

  // This requires `tags` to be set in the `attributesForFacetings`
  // in your Algolia index settings
  instantsearch.widgets.refinementList({
    container: '#tags-list',
    attribute: 'tags',
  }),

  instantsearch.widgets.hits({
    container: '#content',
    templates: {
      item: `
      <article>
        <a href="{{ url }}">
          <strong>
            {{#helpers.highlight}}
              { "attribute": "title", "highlightedTagName": "mark" }
            {{/helpers.highlight}}
          </strong>
        </a>
        {{#content}}
          <p>{{#helpers.snippet}}{ "attribute": "content", "highlightedTagName": "mark" }{{/helpers.snippet}}</p>
        {{/content}}
      </article>
    `,
    },
  }),
]);

search.start();