for (var i = 1; i <= 9; i++) {
  var row = document.createElement('div');
  row.setAttribute('class', 'row')
  for (var j = 1; j <=9; j++) {
    var cell = document.createElement('div');
    if (i == j) {
      cell.setAttribute('class', 'cell cell-main');
    }
    if (i > j) {
      cell.setAttribute('class', 'cell cell-umain');
    }
    if (i < j) {
      cell.setAttribute('class', 'cell cell-omain')
    }
    cell.innerText = i * j;
    row.appendChild(cell);
  }
  pifagor.appendChild(row);
}
