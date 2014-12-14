function mergeSort(toSort) {
	if (toSort.length <= 1) {
		return toSort.slice(0);
	}
    var center = toSort.length / 2;
    var left = mergeSort(toSort.slice(0, center));
    var right = mergeSort(toSort.slice(center));
    return merge(left, right);
}

function merge(sortedLeft, sortedRight) {
  var result = new Array();
  while (sortedLeft.length > 0 && sortedRight.length > 0) {
    if (sortedLeft[0] <= sortedRight[0]) {
      result.push(sortedLeft[0]);
      sortedLeft.splice(0, 1);
    } else {
      result.push(sortedRight[0]);
      sortedRight.splice(0, 1);
    }
  }
  if (sortedLeft.length > 0) {
    result = result.concat(sortedLeft);
  } 
  if (sortedRight.length > 0) {
    result = result.concat(sortedRight);
  }
  return result;
}

function createRandomNumbers(count, maxNumber) {
	var array = new Array();
	for (var i = 0; i < count; i++) {
		var randomnumber = 
			array.push(Math.floor(Math.random() * (maxNumber + 1)));
	}
	return array;
}


var someList = createRandomNumbers(200, 10000);

function runMergeSort() {
	var sorted = mergeSort(someList);	
	print(sorted.join(','));
}

// runMergeSort();

Benchmark.report("MergeSort", runMergeSort, runMergeSort);