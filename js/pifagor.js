for (var i = 1; i <= 9; i++) {
  var row = document.createElement('div');
  row.setAttribute('class', 'row')
  for (var j = 1; j <=9; j++) {
    var cell = document.createElement('div');
    $class = (i == j) ? 'cell cell-main' : 'cell';
    $class = (i > j) ? 'cell cell-umain' : $class;
    $class = (i < j) ? 'cell cell-omain' : $class;
    $class = (i % 2 == 0) || (j % 2 == 0) ? 'cell cell-even' : $class;

    cell.setAttribute('class', $class);
    cell.innerText = i * j;
    row.appendChild(cell);
  }
  pifagor.appendChild(row);
}


// for (var i = 1; i <= 9; i++) {
//   var row = document.createElement('div');
//   row.setAttribute('class', 'row')
//   for (var j = 1; j <=9; j++) {
//     var cell = document.createElement('div');
//     if (i == j) {
//       cell.setAttribute('class', 'cell cell-main');
//     }
//     if (i > j) {
//       cell.setAttribute('class', 'cell cell-umain');
//     }
//     if (i < j) {
//       cell.setAttribute('class', 'cell cell-omain')
//     }
//     cell.innerText = i * j;
//     row.appendChild(cell);
//   }
//   pifagor.appendChild(row);
// }
