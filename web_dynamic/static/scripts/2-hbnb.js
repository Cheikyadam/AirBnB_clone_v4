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


        var checkedAmenities = {}
        $('input[type="checkbox"]').change(function(){
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');
                if ($(this).is(':checked')) {
                  checkedAmenities[amenityId] = amenityName
                }
                else {
                  delete checkedAmenities[amenityId];
                }
                 var names = Object.values(checkedAmenities);
                 $('.amenities h4').text(names.join(', '));

        });

});
