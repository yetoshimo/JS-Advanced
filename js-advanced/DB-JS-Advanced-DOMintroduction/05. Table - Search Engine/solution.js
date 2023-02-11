function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableBody = document.getElementsByTagName("tr");
      let tableList = Array.from(tableBody);
      tableList = tableList.splice(2);

      let searchField = document.getElementById("searchField");

      let searchValue = searchField.value;

      for (let el of tableList) {
         if (el.textContent.includes(searchValue)) {
            el.className = "select";
         } else {
            el.classList.remove("select");
         }
      }

      searchField.value = "";
   }
}