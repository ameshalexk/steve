function updateMAP() {
    fetch("https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?where=OBJECTID%3E0&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=")
    .then(resolve => resolve.json())
    .then(rsv => {
        // const {features : lol} = rsv;
        // console.log(lol);

        let iterate = function (obj) {
            for(prop in obj){
                if(typeof(obj[prop]) ==="object"){
                    iterate(obj[prop]);
                } else {
                    if(prop =="Long_") {
                        console.log(obj);
                        // let amesh = [];
                        // for (let [key, value] of Object.entries(obj)) {
                        //     amesh.push(`${key}: ${value}`);
                        //     console.log(amesh);
                        // };
                    }
                }

            }
        }

        iterate(rsv);


        // let amesh = lol.filter(function (item, idx, arr) {
        //         let bob = iterate(item);
        //          return bob;
        // })
        // console.log(amesh);

    })






        // lol.data.forEach(element => {
        //     lat = element.latitude;
        //     lon = element.longitude;

        //     cases = element.infected;
        //     if (cases>255){
        //         color = "rgb(255, 0, 0)";
        //     }

        //     else{
        //         color = `rgb(${cases}, 0, 0)`;
        //     }


        //     new mapboxgl.Marker({
        //         draggable: false,
        //         color: color
        //     })
        //         .setLngLat([lon, lat])
        //         .addTo(map);




        // });
    }


updateMAP();
