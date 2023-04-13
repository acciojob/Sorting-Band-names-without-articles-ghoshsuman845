//your code here

let bandNames = ['The Beatles', 'Radiohead', 'Pink Floyd', 'The Who', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones'];

function stripArticle(name) {
  // regex to match articles at the beginning of the name
  const regex = /^(a |an |the )/i;

  // replace the article with an empty string
  return name.replace(regex, '').trim();
}

// sort the band names in lexicographic order excluding articles
bandNames.sort((a, b) => {
  if (stripArticle(a) < stripArticle(b)) {
    return -1;
  } else if (stripArticle(a) > stripArticle(b)) {
    return 1;
  } else {
    return 0;
  }
});

// get the ul element
const ul = document.getElementById('band');

// create li elements for each band name and append to the ul element
for (let name of bandNames) {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
}
