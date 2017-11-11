function vocabList(vocabSet) {
  var text = "";
  for(x in vocabSet) {
    text += "<tr><td class=\"word\">" + x + ": </td><td class=\"def\">" + vocabSet[x] + "</td></tr>";
  }
  document.getElementById('words').innerHTML = text;
};
