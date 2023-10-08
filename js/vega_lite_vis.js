var world_map = "js/average_price_world_map.vg.json";
vegaEmbed('#world_map', world_map, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var property_distribution_bar_chart = "js/property_distribution_bar_chart.vg.json";
vegaEmbed('#property_distribution_bar_chart', property_distribution_bar_chart, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var line_chart = "js/average_price_across_years.vg.json";
vegaEmbed('#line_chart', line_chart, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var bubble_chart = "js/bubble_plot_area_rooms_price.vg.json";
vegaEmbed('#bubble_chart', bubble_chart, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var parallel_connections = "js/relationships_between_details.vg.json";
vegaEmbed('#parallel_connections', parallel_connections, { "actions": false }).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);