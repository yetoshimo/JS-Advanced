function toggle() {
    let spanElement = document.getElementsByClassName("button")[0];
    let extraPart = document.getElementById("extra");
    extraPart.style.display = extraPart.style.display == "none" ? "block" : "none";
    spanElement.textContent = spanElement.textContent == "Less" ? "More" : "Less";
}