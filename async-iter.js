let myObj = {
  [Symbol.asyncIterator] () {
    return {
      i: 0,
      next() {
        if (this.i < 3) {

          return new Promise(resolve => {
            let obj = { value: this.i, done: false };
            this.i = this.i + 1;
            setTimeout(resolve, 1000, obj);
          });
        }
        return new Promise(resolve => {
          setTimeout(resolve, 3000, { done: true });
        });
      }
    };
  }
};

(async function() {
  for await (let num of myObj) {
    console.log(num);
  }
})();
