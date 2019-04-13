
    // example data from server
    var series = [
    [ 'AFG', 6 ],[ 'ALB', 5 ],[ 'DZA', 3 ],[ 'AGO', 8 ],[ 'ATG', 0 ],
 	[ 'ARG', 9 ],[ 'ARM', 5 ],[ 'AUS', 11 ],[ 'AUT', 11 ],[ 'AZE', 2 ],
 	[ 'BHS', 1 ],[ 'BHR', 5 ],[ 'BGD', 6 ],[ 'BRB', 0 ],[ 'BLR', 21 ],
 	[ 'BEL', 15 ],[ 'BLZ', 5 ],[ 'BEN', 15 ],[ 'BTN', 11 ],[ 'BOL', 12 ],
 	[ 'BIH', 6 ],[ 'BWA', 11 ],[ 'BRA', 6 ],[ 'BRN', 4 ],[ 'BGR', 7 ],
 	[ 'BFA', 14 ],[ 'BDI', 15 ],[ 'CPV', 15 ],[ 'KHM', 5 ],[ 'CMR', 19 ],
  	[ 'CAN', 10 ],[ 'CAF', 11 ],[ 'TCD', 15 ],[ 'CHL', 9 ],[ 'CHN', 8 ],
  	[ 'COL', 7 ],[ 'COM', 11 ],[ 'COG', 9 ],[ 'CRI', 7 ],[ 'CIV', 23 ],
  	[ 'HRV', 11 ],[ 'CUB', 10 ],[ 'CYP', 4 ],[ 'CSK', 10 ],[ 'PRK', 10 ],
  	[ 'COD', 9 ],[ 'DNK', 9 ],[ 'DJI', 8 ],[ 'DOM', 10 ],[ 'ECU', 7 ],
  	[ 'EGY', 4 ],[ 'SLV', 13 ],[ 'GNQ', 22 ],[ 'ERI', 13 ],[ 'EST', 14 ],
  	[ 'SWZ', 16 ],[ 'ETH', 11 ],[ 'FJI', 5 ],[ 'FIN', 13 ],[ 'FRA', 12 ],
  	[ 'GAB', 9 ],[ 'GMB', 10 ],[ 'GEO', 6 ],[ 'DEU', 9 ],[ 'GHA', 8 ],
  	[ 'GRC', 3 ],[ 'GRD', 1 ],[ 'GTM', 2 ],[ 'GIN', 10 ],[ 'GNB', 7 ],
  	[ 'GUY', 30 ],[ 'HTI', 12 ],[ 'HND', 3 ],[ 'HUN', 13 ],[ 'ISL', 13 ],
  	[ 'IND', 16 ],[ 'IDN', 3 ],[ 'IRN', 4 ],[ 'IRQ', 4 ],[ 'IRL', 10 ],
  	[ 'ISR', 5 ],[ 'ITA', 5 ],[ 'JAM', 2 ],[ 'JPN', 14 ],[ 'JOR', 3 ],
 	[ 'KAZ', 22 ],[ 'KEN', 5 ],[ 'KIR', 15 ],[ 'KWT', 2 ],[ 'KGZ', 9 ],
 	[ 'LAO', 9 ],[ 'LVA', 17 ],[ 'LBN', 3 ],[ 'LSO', 28 ],[ 'LBR', 13 ],
  	[ 'LBY', 5 ],[ 'LTU', 25 ],[ 'LUX', 10 ],[ 'MDG', 6 ],[ 'MWI', 7 ],
  	[ 'MYS', 6 ],[ 'MDV', 2 ],[ 'MLI', 8 ],[ 'MLT', 6 ],[ 'MRT', 7 ],
  	[ 'MUS', 7 ],[ 'MEX', 5 ],[ 'FSM', 11 ],[ 'MNG', 13 ],[ 'MNE', 7 ],
	[ 'MAR', 3 ],[ 'MOZ', 8 ],[ 'MMR', 8 ],[ 'NAM', 11 ],[ 'NPL', 9 ],
 	[ 'NLD', 9 ],[ 'NZL', 11 ],[ 'NIC', 11 ],[ 'NER', 9 ],[ 'NGA', 17 ],
	[ 'NOR', 10 ],[ 'OMN', 3 ],[ 'PAK', 3 ],[ 'PAN', 4 ],[ 'PNG', 7 ],
	[ 'PRY', 9 ],[ 'PER', 5 ],[ 'PHL', 3 ],[ 'POL', 13 ],[ 'PRT', 8 ],
 	[ 'QAT', 5 ],[ 'KOR', 20 ],[ 'MDA', 13 ],[ 'ROU', 8 ],[ 'RUS', 26 ],
  	[ 'RWA', 11 ],[ 'LCA', 7 ],[ 'VCT', 2 ],[ 'WSM', 5 ],[ 'STP', 3 ],
  	[ 'SAU', 3 ],[ 'SEN', 11 ],[ 'SRB', 10 ],[ 'SYC', 8 ],[ 'SLE', 16 ],
  	[ 'SGP', 7 ],[ 'SVK', 10 ],[ 'SVN', 13 ],[ 'SLB', 5 ],[ 'SOM', 8 ],
  	[ 'ZAF', 12 ],[ 'SSD', 6 ],[ 'ESP', 6 ],[ 'LKA', 14 ],[ 'SDN', 9 ],
  	[ 'SUR', 23 ],[ 'SWE', 11 ],[ 'CHE', 11 ],[ 'SYR', 2 ],[ 'TJK', 3 ],
  	[ 'THA', 12 ],[ 'MKD', 6 ],[ 'TLS', 6 ],[ 'TGO', 16 ],[ 'TON', 4 ],
  	[ 'TTO', 12 ],[ 'TUN', 3 ],[ 'TUR', 7 ],[ 'TKM', 7 ],[ 'UGA', 20 ],
  	[ 'UKR', 18 ],[ 'ARE', 2 ],[ 'GBR', 7 ],[ 'TZA', 9 ],[ 'USA', 13 ],
  	[ 'URY', 16 ],[ 'UZB', 7 ],[ 'VUT', 5 ],[ 'VEN', 3 ],[ 'VNM', 7 ],
	[ 'YEM', 9 ],[ 'ZMB', 11 ],[ 'ZWE', 19 ]];

    // Datamaps expect data in format:
    var dataset = {};

    // We need to colorize every country based on "numberOfWhatever"
    // colors should be uniq for every value.
    // For this purpose we create palette(using min/max series-value)
    var onlyValues = series.map(function(obj){ return obj[1]; });
    var minValue = Math.min.apply(null, onlyValues),
        maxValue = Math.max.apply(null, onlyValues);

    // create color palette function
    // color can be whatever you wish
    var paletteScale = d3.scale.linear()
      .domain([minValue,maxValue])
      .range(["#ADD8E6","#0000FF"]); // blue color

    // fill dataset in appropriate format
    series.forEach(function(item){ //
        // item example value ["USA", 70]
        var iso = item[0],
                value = item[1];
        dataset[iso] = { suicideRate: value, fillColor: paletteScale(value) };
    });

    // render map
    new Datamap({
        element: document.getElementById('map'),
        projection: 'mercator', // big world map
        // countries don't listed in dataset will be painted with this color
        fills: { defaultFill: '#F5F5F5' },
        data: dataset,
        geographyConfig: {
            borderColor: '#DEDEDE',
            highlightBorderWidth: 2,
            // don't change color on mouse hover
            highlightFillColor: function(geo) {
                return geo['fillColor'] || '#F5F5F5';
            },
            // only change border
            highlightBorderColor: '#B7B7B7',
            // show desired information in tooltip
            popupTemplate: function(geo, data) {
                // don't show tooltip if country don't present in dataset
                if (!data) { return ; }
                // tooltip content
                return ['<div class="hoverinfo">',
                    '<strong>', geo.properties.name, '</strong>',
                    '<br>Suicide Rate: <strong>', data.suicideRate, '</strong>',
                    '</div>'].join('');
            }
        }
    });

function readData() {
  const csv = require('csv-parser');
  const fs = require('fs');

  let all_country_data = [];

  fs.createReadStream('data2016male.csv')
    .pipe(csv())
    .on('data', (row) => {
      const data = row;
      const country = row.Country;
      const suicide_rate = parseInt(row.SuicideRate);
      const country_data = [country, suicide_rate];
      all_country_data.push(country_data);
    })
    .on('end', () => {
      console.log('The CSV file has been read completely');
      console.dir(all_country_data, {depth: null, colors: true, maxArrayLength: null});
    });
}
