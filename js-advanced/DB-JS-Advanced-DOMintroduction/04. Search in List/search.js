function search() {
   let counter = 0;
   let towns = document.getElementById("towns").getElementsByTagName("li");
   let searchValue = document.getElementById("searchText").value;
   for (let town of towns) {
      if (town.textContent.includes(searchValue)) {
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
         counter++;
      } else {
         town.style.textDecoration = "none";
         town.style.fontWeight = "normal";
      }
   }
   document.getElementById("result").textContent = `${counter} matches found`
}
