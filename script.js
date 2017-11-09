fucntion revealSet1(vocabSet) {
  var text = "";
  for(x in set1) {
    text = text + x + ": " + set1[x] + "<br />";
  }
  document.getElementbyId("words").innerHTML = vocabSet;
};
