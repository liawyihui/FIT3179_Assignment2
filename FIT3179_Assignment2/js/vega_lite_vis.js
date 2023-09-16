var world_map = "js/average_price_world_map.vg.json";
vegaEmbed('#world_map', world_map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var country_distribution_bar_chart = "js/country_distribution_bar_chart.vg.json";
vegaEmbed('#bar_chart', country_distribution_bar_chart).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);