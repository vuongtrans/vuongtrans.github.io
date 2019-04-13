
    // example data from server
    var bothsexes = [
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

  var female = [[ 'AFG', 2 ],[ 'ALB', 4 ],[ 'DZA', 1 ],[ 'AGO', 4 ],[ 'ATG', 0 ],
 [ 'ARG', 3 ],[ 'ARM', 2 ],[ 'AUS', 6 ],[ 'AUT', 5 ],[ 'AZE', 1 ],
 [ 'BHS', 0 ],[ 'BHR', 2 ],[ 'BGD', 6 ],[ 'BRB', 0 ],[ 'BLR', 6 ],
 [ 'BEL', 9 ],[ 'BLZ', 2 ],[ 'BEN', 9 ],['BTN', 8 ],[ 'BOL', 8 ],
 [ 'BIH', 2 ],[ 'BWA', 5 ],[ 'BRA', 2 ],[ 'BRN', 2 ],[ 'BGR', 3 ],
 [ 'BFA', 9 ],[ 'BDI', 7 ],[ 'CPV', 7 ],[ 'KHM', 3 ],[ 'CMR', 12 ], 
 [ 'CAN', 5 ],[ 'CAF', 6 ],[ 'TCD', 13 ],[ 'CHL', 3 ],[ 'CHN', 8 ],
 [ 'COL', 2 ],[ 'COM', 5 ],[ 'COG', 5 ],[ 'CRI', 2 ],[ 'CIV', 13 ],
 [ 'HRV', 5 ],[ 'CUB', 4 ],[ 'CYP', 1 ],[ 'CSK', 4 ],[ 'PRK', 8 ],
 [ 'COD', 4 ],[ 'DNK', 5 ],[ 'DJI', 5 ],[ 'DOM', 3 ],[ 'ECU', 3 ],
 [ 'EGY', 1 ],[ 'SLV', 4 ],[ 'GNQ', 10 ],[ 'ERI', 6 ],[ 'EST', 4 ],
 [ 'SWZ', 9 ],[ 'ETH', 4 ],[ 'FJI', 2 ],[ 'FIN', 6 ],[ 'FRA', 6 ],
 [ 'GAB', 4 ],[ 'GMB', 7 ],[ 'GEO', 1 ],[ 'DEU', 4 ],[ 'GHA', 2 ],
 [ 'GRC', 1 ],[ 'GRD', 1 ],[ 'GTM', 1 ],[ 'GIN', 8 ],[ 'GNB', 6 ],
 [ 'GUY', 14 ],[ 'HTI', 6 ],[ 'HND', 1 ],[ 'HUN', 6 ],[ 'ISL', 4 ],
 [ 'IND', 14 ],[ 'IDN', 2 ],[ 'IRN', 3 ],[ 'IRQ', 3 ],[ 'IRL', 4 ],
 [ 'ISR', 2 ],[ 'ITA', 2 ],[ 'JAM', 0 ],[ 'JPN', 8 ],[ 'JOR', 2 ],
 [ 'KAZ', 7 ],[ 'KEN', 2 ],[ 'KIR', 5 ],[ 'KWT', 1 ],[ 'KGZ', 3 ],
 [ 'LAO', 6 ],[ 'LVA', 5 ],[ 'LBN', 2 ],[ 'LSO', 32 ],[ 'LBR', 13 ],
 [ 'LBY', 2 ],[ 'LTU', 6 ],[ 'LUX', 5 ],[ 'MDG', 3 ],[ 'MWI', 3 ],
 [ 'MYS', 3 ],[ 'MDV', 1 ],[ 'MLI', 4 ],[ 'MLT', 2 ],[ 'MRT', 3 ],
 [ 'MUS', 2 ],[ 'MEX', 2 ],[ 'FSM', 6 ],[ 'MNG', 3 ],[ 'MNE', 3 ],
 [ 'MAR', 3 ],[ 'MOZ', 4 ],[ 'MMR', 9 ],[ 'NAM', 4 ],[ 'NPL', 8 ],
 [ 'NLD', 6 ],[ 'NZL', 6 ],[ 'NIC', 5 ],[ 'NER', 6 ],[ 'NGA', 17 ],
 [ 'NOR', 6 ],[ 'OMN', 0 ],[ 'PAK', 3 ],[ 'PAN', 1 ],[ 'PNG', 3 ],
 [ 'PRY', 6 ],[ 'PER', 2 ],[ 'PHL', 2 ],[ 'POL', 3 ],[ 'PRT', 3 ],
 [ 'QAT', 1 ],[ 'KOR', 11 ],[ 'MDA', 3 ],[ 'ROU', 2 ],[ 'RUS', 7 ],
 [ 'RWA', 6 ],[ 'LCA', 2 ],[ 'VCT', 0 ],[ 'WSM', 2 ],[ 'STP', 2 ],
 [ 'SAU', 1 ],[ 'SEN', 5 ],[ 'SRB', 5 ],[ 'SYC', 2 ],[ 'SLE', 14 ],
 [ 'SGP', 4 ],[ 'SVK', 2 ],[ 'SVN', 4 ],[ 'SLB', 3 ],[ 'SOM', 5 ],
 [ 'ZAF', 5 ],[ 'SSD', 4 ],[ 'ESP', 3 ],[ 'LKA', 6 ],[ 'SDN', 4 ],
 [ 'SUR', 10 ],[ 'SWE', 7 ],[ 'CHE', 6 ],[ 'SYR', 1 ],[ 'TJK', 1 ],
 [ 'THA', 4 ],[ 'MKD', 3 ],[ 'TLS', 3 ],[ 'TGO', 10 ],[ 'TON', 2 ],
 [ 'TTO', 4 ],[ 'TUN', 2 ],[ 'TUR', 3 ],[ 'TKM', 3 ],[ 'UGA', 18 ],
 [ 'UKR', 4 ],[ 'ARE', 0 ],[ 'GBR', 3 ],[ 'TZA', 5 ],[ 'USA', 6 ],
 [ 'URY', 7 ],[ 'UZB', 4 ],[ 'VUT', 2 ],[ 'VEN', 1 ],[ 'VNM', 3 ],
 [ 'YEM', 6 ],[ 'ZMB', 6 ],[ 'ZWE', 11 ]];

 var male = [[ 'AFG', 10 ],[ 'ALB', 7 ],[ 'DZA', 4 ],[ 'AGO', 14 ],[ 'ATG', 0 ],
 [ 'ARG', 15 ],[ 'ARM', 10 ],[ 'AUS', 17 ],[ 'AUT', 17 ],[ 'AZE', 4 ],
 [ 'BHS', 2 ],[ 'BHR', 7 ],[ 'BGD', 5 ],[ 'BRB', 0 ],[ 'BLR', 39 ],
 [ 'BEL', 22 ],[ 'BLZ', 9 ],[ 'BEN', 22 ],[ 'BTN', 13 ],[ 'BOL', 16 ],
 [ 'BIH', 10 ],[ 'BWA', 18 ],[ 'BRA', 9 ],[ 'BRN', 6 ],[ 'BGR', 13 ],
 [ 'BFA', 22 ],[ 'BDI', 23 ],[ 'CPV', 24 ],[ 'KHM', 9 ],[ 'CMR', 26 ],
 [ 'CAN', 15 ],[ 'CAF', 18 ],[ 'TCD', 17 ],[ 'CHL', 16 ],[ 'CHN', 7 ],
 [ 'COL', 11 ],[ 'COM', 17 ],[ 'COG', 13 ],[ 'CRI', 12 ],[ 'CIV', 32 ],
 [ 'HRV', 18 ],[ 'CUB', 16 ],[ 'CYP', 7 ],[ 'CSK', 17 ],[ 'PRK', 14 ],
 [ 'COD', 15 ],[ 'DNK', 13 ],[ 'DJI', 11 ],[ 'DOM', 17 ],[ 'ECU', 10 ],
 [ 'EGY', 7 ],[ 'SLV', 24 ],[ 'GNQ', 31 ],[ 'ERI', 22 ],[ 'EST', 25 ],
 [ 'SWZ', 25 ],[ 'ETH', 18 ],[ 'FJI', 8 ],[ 'FIN', 20 ],[ 'FRA', 17 ],
 [ 'GAB', 15 ],[ 'GMB', 12 ],[ 'GEO', 12 ],[ 'DEU', 13 ],[ 'GHA', 15 ],
 [ 'GRC', 6 ],[ 'GRD', 2 ],[ 'GTM', 4 ],[ 'GIN', 12 ],[ 'GNB', 8 ],
 [ 'GUY', 46 ],[ 'HTI', 18 ],[ 'HND', 5 ],[ 'HUN', 22 ],[ 'ISL', 21 ],
 [ 'IND', 18 ],[ 'IDN', 5 ],[ 'IRN', 4 ],[ 'IRQ', 4 ],[ 'IRL', 17 ],
 [ 'ISR', 8 ],[ 'ITA', 8 ],[ 'JAM', 3 ],[ 'JPN', 20 ],[ 'JOR', 4 ],
 [ 'KAZ', 40 ],[ 'KEN', 9 ],[ 'KIR', 25 ],[ 'KWT', 2 ],[ 'KGZ', 14 ],
 [ 'LAO', 12 ],[ 'LVA', 31 ],[ 'LBN', 4 ],[ 'LSO', 22 ],[ 'LBR', 13 ],
 [ 'LBY', 8 ],[ 'LTU', 47 ],[ 'LUX', 15 ],[ 'MDG', 10 ],[ 'MWI', 13 ],
 [ 'MYS', 8 ],[ 'MDV', 3 ],[ 'MLI', 13 ],[ 'MLT', 10 ],[ 'MRT', 12 ],
 [ 'MUS', 12 ],[ 'MAX', 8 ],[ 'FSM', 16 ],[ 'MNG', 23 ],[ 'MNE', 12 ],
 [ 'MAR', 2 ],[ 'MOZ', 14 ],[ 'MMR', 6 ],[ 'NAM', 19 ],[ 'NPL', 11 ],
 [ 'NLD', 12 ],[ 'NZL', 17 ],[ 'NIC', 19 ],[ 'NER', 11 ],[ 'NGA', 17 ],
 [ 'NOR', 13 ],[ 'OMN', 4 ],[ 'PAK', 3 ],[ 'PAN', 7 ],[ 'PNG', 10 ],
 [ 'PRY', 12 ],[ 'PER', 7 ],[ 'PHL', 5 ],[ 'POL', 23 ],[ 'PRT', 14 ],
 [ 'QAT', 7 ],[ 'KOR', 29 ],[ 'MDA', 24 ],[ 'ROU', 13 ],[ 'RUS', 48 ],
 [ 'RWA', 16 ],[ 'LCA', 12 ],[ 'VCT', 3 ],[ 'WSM', 8 ],[ 'STP', 4 ],
 [ 'SAU', 4 ],[ 'SEN', 20 ],[ 'SRB', 17 ],[ 'SYC', 15 ],[ 'SLE', 18 ],
 [ 'SGP', 11 ],[ 'SVK', 18 ],[ 'SVN', 22 ],[ 'SLB', 8 ],[ 'SOM', 11 ],
 [ 'ZAF', 21 ],[ 'SSD', 8 ],[ 'ESP', 9 ],[ 'LKA', 23 ],[ 'SDN', 14 ],
 [ 'SUR', 36 ],[ 'SWE', 15 ],[ 'CHE', 15 ],[ 'SYR', 3 ],[ 'TJK', 5 ],
 [ 'THA', 21 ],[ 'MKD', 9 ],[ 'TLS', 9 ],[ 'TGO', 22 ],[ 'TON', 5 ],
 [ 'TTO', 21 ],[ 'TUN', 4 ],[ 'TUR', 11 ],[ 'TKM', 11 ],[ 'UGA', 21 ],
 [ 'UKR', 34 ],[ 'ARE', 3 ],[ 'GBR', 11 ],[ 'TZA', 14 ],[ 'USA', 21 ],
 [ 'URY', 26 ],[ 'UZB', 10 ],[ 'VUT', 8 ],[ 'VEN', 6 ],[ 'VNM', 10 ],
 [ 'YEM', 13 ],[ 'ZMB', 17 ],[ 'ZWE', 29 ]];


// based on what is clicked, update the series

// get list of radio buttons with name 'size'
var sz = document.forms['demoForm'].elements['size'];

// loop through list
for (var i=0, len=sz.length; i<len; i++) {
    sz[i].onclick = function() { // assign onclick handler function to each
        // put clicked radio button's value in total field
        console.log(this.value);
    };
}
  var series = female;

 //    var series = [
 //    [ 'AFG', 6 ],[ 'ALB', 5 ],[ 'DZA', 3 ],[ 'AGO', 8 ],[ 'ATG', 0 ],
 // 	[ 'ARG', 9 ],[ 'ARM', 5 ],[ 'AUS', 11 ],[ 'AUT', 11 ],[ 'AZE', 2 ],
 // 	[ 'BHS', 1 ],[ 'BHR', 5 ],[ 'BGD', 6 ],[ 'BRB', 0 ],[ 'BLR', 21 ],
 // 	[ 'BEL', 15 ],[ 'BLZ', 5 ],[ 'BEN', 15 ],[ 'BTN', 11 ],[ 'BOL', 12 ],
 // 	[ 'BIH', 6 ],[ 'BWA', 11 ],[ 'BRA', 6 ],[ 'BRN', 4 ],[ 'BGR', 7 ],
 // 	[ 'BFA', 14 ],[ 'BDI', 15 ],[ 'CPV', 15 ],[ 'KHM', 5 ],[ 'CMR', 19 ],
 //  	[ 'CAN', 10 ],[ 'CAF', 11 ],[ 'TCD', 15 ],[ 'CHL', 9 ],[ 'CHN', 8 ],
 //  	[ 'COL', 7 ],[ 'COM', 11 ],[ 'COG', 9 ],[ 'CRI', 7 ],[ 'CIV', 23 ],
 //  	[ 'HRV', 11 ],[ 'CUB', 10 ],[ 'CYP', 4 ],[ 'CSK', 10 ],[ 'PRK', 10 ],
 //  	[ 'COD', 9 ],[ 'DNK', 9 ],[ 'DJI', 8 ],[ 'DOM', 10 ],[ 'ECU', 7 ],
 //  	[ 'EGY', 4 ],[ 'SLV', 13 ],[ 'GNQ', 22 ],[ 'ERI', 13 ],[ 'EST', 14 ],
 //  	[ 'SWZ', 16 ],[ 'ETH', 11 ],[ 'FJI', 5 ],[ 'FIN', 13 ],[ 'FRA', 12 ],
 //  	[ 'GAB', 9 ],[ 'GMB', 10 ],[ 'GEO', 6 ],[ 'DEU', 9 ],[ 'GHA', 8 ],
 //  	[ 'GRC', 3 ],[ 'GRD', 1 ],[ 'GTM', 2 ],[ 'GIN', 10 ],[ 'GNB', 7 ],
 //  	[ 'GUY', 30 ],[ 'HTI', 12 ],[ 'HND', 3 ],[ 'HUN', 13 ],[ 'ISL', 13 ],
 //  	[ 'IND', 16 ],[ 'IDN', 3 ],[ 'IRN', 4 ],[ 'IRQ', 4 ],[ 'IRL', 10 ],
 //  	[ 'ISR', 5 ],[ 'ITA', 5 ],[ 'JAM', 2 ],[ 'JPN', 14 ],[ 'JOR', 3 ],
 // 	[ 'KAZ', 22 ],[ 'KEN', 5 ],[ 'KIR', 15 ],[ 'KWT', 2 ],[ 'KGZ', 9 ],
 // 	[ 'LAO', 9 ],[ 'LVA', 17 ],[ 'LBN', 3 ],[ 'LSO', 28 ],[ 'LBR', 13 ],
 //  	[ 'LBY', 5 ],[ 'LTU', 25 ],[ 'LUX', 10 ],[ 'MDG', 6 ],[ 'MWI', 7 ],
 //  	[ 'MYS', 6 ],[ 'MDV', 2 ],[ 'MLI', 8 ],[ 'MLT', 6 ],[ 'MRT', 7 ],
 //  	[ 'MUS', 7 ],[ 'MEX', 5 ],[ 'FSM', 11 ],[ 'MNG', 13 ],[ 'MNE', 7 ],
	// [ 'MAR', 3 ],[ 'MOZ', 8 ],[ 'MMR', 8 ],[ 'NAM', 11 ],[ 'NPL', 9 ],
 // 	[ 'NLD', 9 ],[ 'NZL', 11 ],[ 'NIC', 11 ],[ 'NER', 9 ],[ 'NGA', 17 ],
	// [ 'NOR', 10 ],[ 'OMN', 3 ],[ 'PAK', 3 ],[ 'PAN', 4 ],[ 'PNG', 7 ],
	// [ 'PRY', 9 ],[ 'PER', 5 ],[ 'PHL', 3 ],[ 'POL', 13 ],[ 'PRT', 8 ],
 // 	[ 'QAT', 5 ],[ 'KOR', 20 ],[ 'MDA', 13 ],[ 'ROU', 8 ],[ 'RUS', 26 ],
 //  	[ 'RWA', 11 ],[ 'LCA', 7 ],[ 'VCT', 2 ],[ 'WSM', 5 ],[ 'STP', 3 ],
 //  	[ 'SAU', 3 ],[ 'SEN', 11 ],[ 'SRB', 10 ],[ 'SYC', 8 ],[ 'SLE', 16 ],
 //  	[ 'SGP', 7 ],[ 'SVK', 10 ],[ 'SVN', 13 ],[ 'SLB', 5 ],[ 'SOM', 8 ],
 //  	[ 'ZAF', 12 ],[ 'SSD', 6 ],[ 'ESP', 6 ],[ 'LKA', 14 ],[ 'SDN', 9 ],
 //  	[ 'SUR', 23 ],[ 'SWE', 11 ],[ 'CHE', 11 ],[ 'SYR', 2 ],[ 'TJK', 3 ],
 //  	[ 'THA', 12 ],[ 'MKD', 6 ],[ 'TLS', 6 ],[ 'TGO', 16 ],[ 'TON', 4 ],
 //  	[ 'TTO', 12 ],[ 'TUN', 3 ],[ 'TUR', 7 ],[ 'TKM', 7 ],[ 'UGA', 20 ],
 //  	[ 'UKR', 18 ],[ 'ARE', 2 ],[ 'GBR', 7 ],[ 'TZA', 9 ],[ 'USA', 13 ],
 //  	[ 'URY', 16 ],[ 'UZB', 7 ],[ 'VUT', 5 ],[ 'VEN', 3 ],[ 'VNM', 7 ],
	// [ 'YEM', 9 ],[ 'ZMB', 11 ],[ 'ZWE', 19 ]];

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
            highlightBorderWidth: 5,
            // don't change color on mouse hover
            highlightFillColor: function(geo) {
                return geo['fillColor'] || '#F5F5F5';
            },
            // only change border
            highlightBorderColor: '#FFFF00',
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
