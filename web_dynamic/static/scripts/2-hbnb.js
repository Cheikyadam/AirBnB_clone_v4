$(document).ready(function () {
var statUrl = 'http://0.0.0.0:5001/api/v1/status/';
var apiStat = $('#api_status');

	$.get(statUrl, function (data) {
	if (data.status == 'OK') {
		apiStat.addClass('available');
	}
		else {
		apiStat.removeClass('available');
		}
	});

});
