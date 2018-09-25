const search = instantsearch({
	appId: 'latency',
	apiKey: '6be0576ff61c053d5f9a3225e2a90f76', //Search only API Key
	indexName: 'instant_search',
	routing: true
});

search.addWidget(
	instantsearch.widgets.searchBox({
		container: '#search-input'
	})
);

search.addWidget(
	instantsearch.widgets.hits({
		container: '#hits',
		hitsPerPage: 10,
		templates: {
			item: document.getElementById('hit-template').innerHTML,
			empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
		}
	})
);

search.addWidget(
	instantsearch.widgets.pagination({
		container: '#pagination'
	})
);

search.start();