const search = instantsearch({
    appId: 'latency',
    apiKey: '6be0576ff61c053d5f9a3225e2a90f76',
    indexName: 'instant_search',
    routing: true
});

search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            empty: 'No results',
            item: '<em>Hit {{objectID}}</em>: {{{_highlightResult.name.value}}}'
        }
    })
);

// initialize SearchBox
search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: 'Search for products'
    })
);

// initialize RefinementList
search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#refinement-list',
        attributeName: 'categories'
    })
);

// initialize currentRefinedValues
search.addWidget(
    instantsearch.widgets.currentRefinedValues({
        container: '#current-refined-values',
        // This widget can also contain a clear all link to remove all filters,
        // we disable it in this example since we use `clearAll` widget on its own.
        clearAll: false
    })
);

// initialize clearAll
search.addWidget(
    instantsearch.widgets.clearAll({
        container: '#clear-all',
        templates: {
            link: 'Reset everything'
        },
        autoHideContainer: false
    })
);

// initialize pagination
search.addWidget(
    instantsearch.widgets.pagination({
        container: '#pagination',
        maxPages: 20,
        // default is to scroll to 'body', here we disable this behavior
        scrollTo: false
    })
);

search.start();
