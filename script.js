function calcularDistancia() {
    var origem = document.getElementById("origem").value;
    var destino = document.getElementById("destino").value;

    if (origem === "" || destino === "") {
        alert("Por favor, informe o endereço de origem e destino.");
        return;
    }

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
        {
            origins: [origem],
            destinations: [destino],
            travelMode: google.maps.TravelMode.DRIVING,
        },
        function (response, status) {
            if (status === "OK") {
                var distancia = response.rows[0].elements[0].distance.value; // Obtém a distância em metros
                var distanciaEmKm = distancia / 1000; // Converte para quilômetros
                var custo = distanciaEmKm * 2.00; // Multiplica por 4,30

                document.getElementById("resultado").innerHTML = "Distância: " + distanciaEmKm.toFixed(2) + " km <br> Custo: R$ " + custo.toFixed(2);
            } else {
                alert("Erro ao calcular a distância.");
            }
        }
    );
}


