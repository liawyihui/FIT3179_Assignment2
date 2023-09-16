var world_map = "js/average_price_world_map
.vg.json";
vegaEmbed('#world_map', world_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);