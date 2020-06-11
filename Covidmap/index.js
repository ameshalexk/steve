function updateMAP() {
    fetch("data.json")
    .then(resolve => resolve.json())
    .then(rsv => {
        console.log(rsv);

        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
            })
        );
        rsv.data.forEach(element => {
            lat = element.latitude;
            lon = element.longitude;

            cases = element.infected;
            if (cases>255){
                color = "rgb(255, 0, 0)";
            }

            else{
                color = `rgb(${cases}, 0, 0)`;
            }


            new mapboxgl.Marker({
                draggable: false,
                color: color
            })
                .setLngLat([lon, lat])
                .addTo(map);






            document.getElementById('fly').addEventListener('click', function () {
                // Fly to a random location by offsetting the point -74.50, 40
                // by up to 5 degrees.
                map.flyTo({
                    center: [
                         -77.208137, 38.902710
                    ],
                    zoom: 11,
                    essential: true // this animation is considered essential with respect to prefers-reduced-motion
                });
            });


        });
    })
    }

updateMAP();
