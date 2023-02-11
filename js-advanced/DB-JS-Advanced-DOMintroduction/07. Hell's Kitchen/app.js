function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurants = JSON.parse(document.querySelector("#inputs textarea").value);

      for (let restaurant of restaurants) {
         let [restaurantName, ...workers] = restaurant.split(/(?: - )|(?:, )/g);
         
      }
   }
}