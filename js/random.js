function shuffleArray(names) {
  var newArray = ['Andriy', 'Mariya', 'Vasil', 'Petro'];
  shuffle(newArray);
  return newArray;
}
document.getElementById("shuffle").innerHTML = shuffleArray(['Andriy', 'Mariya', 'Vasil', 'Petro']);
