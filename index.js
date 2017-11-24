function initMap() {
    navigator.geolocation.getCurrentPosition(success, error, options);
    function success(pos) {
        var coordenadas = pos.coords;

        var posicaoAtual = new google.maps.LatLng(coordenadas.latitude, coordenadas.longitude);

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 20,
            center: posicaoAtual
        });

        var request = {
            location: posicaoAtual,
            radius: '500',
            types: ['store']
        }

        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, function (results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    // If the request succeeds, draw the place location on
                    // the map as a marker, and register an event to handle a
                    // click on the marker.
                    var marker = new google.maps.Marker({
                        map: map,
                        position: place.geometry.location,
                        title: place.name
                    });
                }
                console.log(results);
            }
        });
    }
    function error(erro) {
        console.log(erro.message);
    }

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
}

