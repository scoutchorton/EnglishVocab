function vocabList(vocabSet) {
  var text = "";
  for(x in vocabSet) {
    text = text + x + ": " + vocabSet[x] + "<br />";
    console.log(text);
    console.log(x);
    console.log(vocabSet[x]);
  }
  document.getElementById('words').innerHTML = vocabSet;
};
