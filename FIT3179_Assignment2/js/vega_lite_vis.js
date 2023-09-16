var world_map = "js/country_distribution.json";
vegaEmbed('#world_map', world_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);