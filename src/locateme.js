var createURL = function( latitude, longitude ) {
  if( latitude == undefined || longitude == undefined )
    return '';
  return 'http://maps.google.com?q=' + latitude + ',' + longitude;
}

var setLocation = function( window, url ) {
  window.location = url;
};