$(document).ready(function (){
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
