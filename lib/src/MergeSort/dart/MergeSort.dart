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
import "../../common/dart/BenchmarkBase.dart";
import 'dart:math';

class TemplateBenchmark extends BenchmarkBase {
  final int NUMBERS = 200;
  final int MAX_NUMBER = 10000;
  static List<int> toSort;
  
  const TemplateBenchmark() : super("Template");
  
  static void main() {
    new TemplateBenchmark().report();
  }

  // The benchmark code.
  void run() {
    mergeSort(toSort);
  }

  void setup() { 
    toSort = createRandomNumbers(NUMBERS, MAX_NUMBER);
  }

  void teardown() { }
}

main() {
  // Run TemplateBenchmark
  TemplateBenchmark.main();
}

List<int> createRandomNumbers(int count, int max) {
  List<int> randomNumbers = []; 
  Random randomGenerator = new Random();
  for (int i = 0; i < count; i++) {
    randomNumbers.add(randomGenerator.nextInt(max));
  }
  return randomNumbers;
}

List<int> mergeSort(List<int> toSort) {
  if (toSort.length <= 1) {
    return new List.from(toSort);
  }
  int center = toSort.length ~/ 2;
  List<int> left = mergeSort(toSort.sublist(0, center));
  List<int> right = mergeSort(toSort.sublist(center, toSort.length));
  return merge(left, right);
}

List<int> merge(List<int> sortedLeft, List<int> sortedRight) {
  List<int> result = new List<int>();
  while (sortedLeft.length > 0 && sortedRight.length > 0) {
    if (sortedLeft[0] <= sortedRight[0]) {
      result.add(sortedLeft[0]);
      sortedLeft.removeAt(0);
    } else {
      result.add(sortedRight[0]);
      sortedRight.removeAt(0);
    }
  }
  if (sortedLeft.length > 0) {
    result.addAll(sortedLeft);
  } 
  if (sortedRight.length > 0) {
    result.addAll(sortedRight);
  }
  return result;
}