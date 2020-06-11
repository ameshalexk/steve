function updateMAP() {
    fetch("data.json")
    .then(resolve => resolve.json())
    .then(rsv => {
        console.log(rsv);
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
                        -74.5 + (Math.random() - 0.5) * 10,
                        40 + (Math.random() - 0.5) * 10
                    ],
                    essential: true // this animation is considered essential with respect to prefers-reduced-motion
                });
            });


        });
    })
    }

updateMAP();
