// //const car = {
//     model: "fiesta",
//     manufacturer: "ford",
//     fullname: function () {
//       return "${this.manufacturer} ${this.model}";
//     },
//   };

let lapsCompleted = 0;

function incrementLap() {
  lapsCompleted = lapsCompleted + 1;
}

incrementLap();
incrementLap();
incrementLap();

console.log(`lapsCompleted`, lapsCompleted);
