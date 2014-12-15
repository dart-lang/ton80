// Copyright 2014 Dirk Weber
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
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
    array.push(Math.floor(Math.random() * (maxNumber + 1)));
  }
  return array;
}


var someList = createRandomNumbers(200, 10000);

function runMergeSort() {
  var sorted = mergeSort(someList);	
  // print(sorted.join(','));
}

Benchmark.report("MergeSort", runMergeSort, runMergeSort);