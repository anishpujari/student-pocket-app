const standard = [ // 0 == empty cell
	[5,3,0,0,7,0,0,0,0],
	[6,0,0,1,9,5,0,0,0],
	[0,9,8,0,0,0,0,6,0],
	[8,0,0,0,6,0,0,0,3],
	[4,0,0,8,0,3,0,0,1],
	[7,0,0,0,2,0,0,0,6],
	[0,6,0,0,0,0,2,8,0],
	[0,0,0,4,1,9,0,0,5],
	[0,0,0,0,8,0,0,7,9]
];
// Takes an array and mixes the items inside
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
// Reorders an array based on a second array of indexes
function arrangeBy(array, indexes){
	let result = [];
	for (let i = 0; i < array.length; i++){
		result[i] = array[indexes[i]];
	}
	return result;
}
// Manually pull one of three chunks of a nine-item array
function pullThird(array, index){
	if (index == 0)
		return array.slice(0,3);
	else if (index == 1)
		return array.slice(3,6);
	else
		return array.slice(6);
}
// Where the magic happens
function generatePuzzle(){
	let puzzle = standard;
	
	// Mix rows
	let rowband1 = shuffle(puzzle.slice(0,3)), // Take 3 rows and mix them
			rowband2 = shuffle(puzzle.slice(3,6)),
			rowband3 = shuffle(puzzle.slice(6)),
			allrows = rowband1.concat(rowband2, rowband3), // Put the mixes together
			roworder = shuffle([0,1,2]); // Mix the 3 row sections
	rowband1 = pullThird(allrows, roworder[0]); // Place the sections in order
	rowband2 = pullThird(allrows, roworder[1]);
	rowband3 = pullThird(allrows, roworder[2]);
	puzzle = rowband1.concat(rowband2, rowband3); // Put them together into the result
	
	// Mix columns
	let order1 = shuffle([0,1,2]), // Set index arrays for arrangeBy()
			order2 = shuffle([0,1,2]),
			order3 = shuffle([0,1,2]),
			columnorder = shuffle([0,1,2]);
	for (let arr = 0; arr < puzzle.length; arr++) { // Runs for each row identically
		let columnband1 = arrangeBy(puzzle[arr].slice(0,3), order1), // Mix the first 3
				columnband2 = arrangeBy(puzzle[arr].slice(3,6), order2),
				columnband3 = arrangeBy(puzzle[arr].slice(6), order3),
				allcolumns = columnband1.concat(columnband2, columnband3); // Repair the row
		columnband1 = pullThird(allcolumns, columnorder[0]); // Place the sections in order
		columnband2 = pullThird(allcolumns, columnorder[1]);
		columnband3 = pullThird(allcolumns, columnorder[2]);
		puzzle[arr] = columnband1.concat(columnband2, columnband3); // Repair again
	}
	
	return puzzle;
}
// Calls generatePuzzle() and populates it to DOM
function getNewPuzzle(){
	let puzzle = generatePuzzle();
	for (let y = 0; y < 9; y++) {
		for (let x = 0; x < 9; x++) {
			$('tr:nth-child('+(y+1)+') > td:nth-child('+(x+1)+')').html('');
			if (puzzle[y][x])
				$('tr:nth-child('+(y+1)+') > td:nth-child('+(x+1)+')').html(puzzle[y][x]);
		}
	}
}
getNewPuzzle();