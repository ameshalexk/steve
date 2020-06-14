var mainObj = {};

let showObj = function() {
    for (let props in mainObj) {
        console.log(props,true);
    };
}

fetch("https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?where=OBJECTID%3E0&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=")
    .then(resolve => resolve.json())
    .then(rsv => {
        const {features : lol} = rsv;
        // console.log(rsv);


        function(obj) {
            var flatmap = [];

            for(prop in obj) {
                if(typeof(obj[prop]) =="object") {
                    amesh(obj[prop]);
                }
                else {

                    if(prop =="Long_") {
                        retur(obj);
                    // console.log(obj);
                    // console.log(flatmap);
                    // flatmap.push(obj);
                }

            }
            }
        }





        console.log(amesh);
        console.log(lol);
        let arr = Object.entries(lol);
        console.log(arr);




        // var results = amesh(lol);
        // console.log(results);

        // function iterate(obj) {
        //     for(prop in obj){
        //         if(typeof(obj[prop]) =="object"){
        //             iterate(obj[prop]);
        //         } else {
        //             if(prop =="Long_") {
        //                  console.log(obj);
        //                 // let amesh = [];
        //                 // for (let [key, value] of Object.entries(obj)) {
        //                 //     amesh.push(`${key}: ${value}`);
        //                 //     console.log(amesh);
        //                 // };
        //             }
        //         }

        //     }
        // }
        // const amesh = lol.filter(function (item, idx, arr) {
        //     iterate(item);
        //  });

        // //  console.log(amesh);
        // // mainObj(rsv);
        // showObj();
    });
