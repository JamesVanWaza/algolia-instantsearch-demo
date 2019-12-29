const searchClient = algoliasearch(
	'latency',
	'6be0576ff61c053d5f9a3225e2a90f76'
);

const search = instantsearch({
	indexName: 'instant_search',
	searchClient,
});

search.addWidgets([
	instantsearch.widgets.searchBox({
		container: '#searchbox'
	})
]);

search.addWidgets([
	instantsearch.widgets.currentRefinements({
		container: '#current-refinements',
	}),

	instantsearch.widgets.refinementList({
		container: '#brand-list',
		attribute: 'brand',
	})
]);

search.addWidgets([
	instantsearch.widgets.hits({
		container: '#hits',
		templates: {
			item: `
				<div>
					<img src="{{image}}" align="left" alt="{{name}}" />
					<div class="hit-name">
						{{#helpers.highlight}}{ "attribute": "name"}{{/helpers.highlight}}
					</div>
					<div class="hit-description">
						{{#helpers.highlight}}{ "attribute": "description"}{{/helpers.highlight}}
					</div>
					<div class="hit-price">\${{price}}</div>
				</div>
			`,
		},
	})
]);

// search.addWidgets([
// 	instantsearch.widgets.pagination({
// 		container: '#pagination'
// 	})
// ]);


// search.addWidgets([
// 	instantsearch.widgets.rangeSlider({
// 		container: '#price-refinement',
// 		attributeName: 'price',
// 		templates: {
// 			header: 'Price'
// 		},
// 		tooltips: {
// 			format: function(rawValue) {
// 				return '$' + Math.round(rawValue).toLocaleString();
// 			}
// 		}
// 	})
// ]);

search.start();