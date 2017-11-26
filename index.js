<<<<<<< HEAD
//Função para iniciar o mapa e as demais funções
function initMap() {
    //Verifica a posicão atual, se conseguir executa a função de sucesso
    //Caso contrario executa a função de erro
    //Options: opções do mapa
    navigator.geolocation.getCurrentPosition(success, error, options);
    //Inicio funçãod callback de sucesso
    function success(posicao) {
        //Pegado coordenadas atuais
        var coordenadas = posicao.coords;
        //Montando objeto LatLng com as coordenadas atuais
        var posicaoAtual = new google.maps.LatLng(coordenadas.latitude, coordenadas.longitude);
        //Montando o mapa e alocando-o na div com id 'map'
        var map = new google.maps.Map(document.getElementById('map'), {
            //Tamanho do zoom
            zoom: 17,
            //Posição central do mapa
            center: posicaoAtual
        });

        //Criando icone personalizado para a posição atual
        var marcadorIcone = {
            //Url da imagem
            url: 'homemarker.png',
            //tamanho base
            size: new google.maps.Size(71,71),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(17,34),
            //Tamanho em escala
            scaledSize: new google.maps.Size(65,70)
        }

        //Criando marcador para posição atual
        var marker = new google.maps.Marker({
            //Definindo que ele aparecerá no meu mapa
            map: map,
            //Na posiçãoAtual.
            position: posicaoAtual,
            //Titulo do marcador
            title: 'Você está aqui!',
            //Icone do marcador: meu icone personalizado
            icon: marcadorIcone
        });

        //Opções de requisição para o google places
        var request = {
            //Localização base
            location: posicaoAtual,
            //Raio de alcance: 5000 metros
            radius: '5000',
            //Tipo de local: hospital
            types: ['hospital']
        }

        //Criando serviço de pesquisa do google places
        var service = new google.maps.places.PlacesService(map);
        //Passando minha variavel de requisição como parametro e criando uma função que
        //recebe os resultados da pesquisa e o status da mesma
        service.nearbySearch(request, function (results, status) {
            //Se houverem resultados correspondentes
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                //Para cada resultado irá alocar um marcador
                for (var i = 0; i < results.length; i++) {
                    //Posição atual na iteração
                    var place = results[i];
                    //Criando marcador
                    var marker = new google.maps.Marker({
                        map: map,
                        //Definido que a posição será a posição atual do resultado 'i'
                        position: place.geometry.location,
                        //Definido titulo do marcador como nome do resultado atual 'i'
                        title: place.name
                    });
                }
                //Usar para ver o array de resultado se for necessario consultar a resposta
                //console.log(results);
            }
            //se não houverem resultados irá informar que não existem especialistas
            //neste raio de alcance
            else{
                alert('Não há especialistas neste raio de alcance');
            }
        });
        //Fim função de sucesso
    }

    //Caso ocorra algum erro ao pegar a posição atual
    function error(erro) {
        alert(erro.message);
    }

    //Opções ao obter posição atual
    var options = {
        enableHighAccuracy: true,
        //Tempo maximo de espera
        timeout: 5000,
        maximumAge: 0
    };
//Fim Função para iniciar o mapa e as demais funções
=======
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
>>>>>>> 2b74f9c60cb106485dd9dbc624a0c74d7734f353
}

