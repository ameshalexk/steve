/**
 * for await(let val of obj) {
 *   use the asynchronous result
 * }
 */

let thing = [
  new Promise(resolve => {
    setTimeout(resolve, 4000, "one");
  }),
  new Promise(resolve => {
    setTimeout(resolve, 1000, "two");
  }),
  new Promise(resolve => {
    setTimeout(resolve, 1000, "three");
  })
];
//all 3 promises are being created as soon as the page runs
//so we need different timeout delay values

(async function() {
  for await (let res of thing) {
    console.log(res);
  }
})();
