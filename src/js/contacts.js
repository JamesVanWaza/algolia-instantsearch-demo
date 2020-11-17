const searchClient = algoliasearch('O966BSY3LD', '6db67900bfa16b4173055f87526117a7');

const search = instantsearch({
    indexName: 'TheContacts',
    searchClient,
});

search.addWidgets([
    searchBox({
        container: '#algolia',
    }),

    hits({
        container: '#hits',
    })
]);

search.start();