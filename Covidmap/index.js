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

        });
    })
    }

updateMAP();
