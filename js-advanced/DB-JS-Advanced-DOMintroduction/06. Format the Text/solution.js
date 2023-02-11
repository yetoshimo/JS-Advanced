function solve() {
  let givenText = document.getElementById("input").value;

  let output = document.getElementById("output");

  let textSentences = givenText.split(".").filter((p) => p.length > 0);

  for (let i = 0; i < textSentences.length; i += 3) {
    let arr = [];

    for (let j = 0; j < 3; j++) {
      if (textSentences[i + j]) {
        arr.push(textSentences[i + j]);
      }
    }

    let paragraph = arr.join('. ') + '.';
    output.innerHTML += `<p>${paragraph}</p>`;
  }
}