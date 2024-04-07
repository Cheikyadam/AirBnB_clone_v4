$(document).ready(function (){
	var checkedAmenities = []
	$('input[type="checkbox"'].change(function(){ 
	var amenityId = $(this).data('id');
	var amenityName = $(this).data('name');
		if ( $(this).is(':checked')) {
		
		checkedAmenities.push(amenityId);
		}
		else {
		var index = checkedAmenities.indexOf(amenityId);
			if ( index !== -1) {
			checkedAmenities.splice(index, 1);
			}
		}
		 $('.amenities h4').text('Amenities: ' + checkedAmenities.join(', '));

	});
});
