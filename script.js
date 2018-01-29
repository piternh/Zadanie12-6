var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: "GET",
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        $('<li>').text(item.name + ' (native name: ' + item.nativeName + '), capital: ' + item.capital + ', region: ' + item.region + ', currency: ' + item.currencies[0].name + ' (' + item.currencies[0].code + ')' + ', language: ' + item.languages[0].name).appendTo(countriesList);
    });
}