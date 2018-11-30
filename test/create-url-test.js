describe( 'create-url test', function() {
  it( 'should return proper url given lat and lon', function() {
    var latitude = -33.857;
    var longitude = 151.215;
    
    var url = createURL( latitude, longitude );
    
    expect( url ).to.be.eql( 'http://maps.google.com?q=-33.857,151.215');
  });
});