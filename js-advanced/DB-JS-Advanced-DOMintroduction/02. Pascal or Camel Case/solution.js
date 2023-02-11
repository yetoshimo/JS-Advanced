function solve() {
  let givenText = document.getElementById('text').value;

  let namingConvention = document.getElementById('naming-convention').value;

  let words = givenText.split(' ').map(e => e.toLowerCase());

  let result = '';

  if (namingConvention === 'Pascal Case') {
    words.forEach(element => {
      let word = element[0].toUpperCase() + element.substring(1);
      result += word;
    });
  } else if (namingConvention === 'Camel Case') {
    result += words[0];
    for (let i = 1; i < words.length; i++) {
      let word = words[i][0].toUpperCase() + words[i].substring(1);
      result += word;
    }
  } else {
    result = 'Error!';
    document.getElementById('result').innerText = result;
  }

  document.getElementById('result').innerText = result;
}