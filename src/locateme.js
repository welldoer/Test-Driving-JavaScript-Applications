var createURL = function( latitude, longitude ) {
  if( latitude == undefined || longitude == undefined )
    return '';
  return 'http://maps.google.com?q=' + latitude + ',' + longitude;
}