import { Injectable } from '@angular/core';
import { sortingModel } from 'resources/sortingModel';

@Injectable({
  providedIn: 'root'
})
export class SortingServiceService {

  constructor() { }

  public setLineCorolToDefault(): string {
      // return "#92B4F4"                // skyBlue
      return "#a598ff"
  }

  public ServiceisRunningAlgo = false;


  public setCompareLine1(): string {
    return "#FC2F00"; // Red
  }

  public setCompareLine2(): string {
    return "#FFFF00"  // Red
  }

  public setLastLine(): string {
      return "#00FF00";  // Green
  }

  public setSortedArray(): string {
    return "rgba(141, 51, 255, 1)"; /// purple
  }



  public createBubbleSortModel() : sortingModel{

      const BubbleDesc = "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.";
      // const


      const bubbleModule = new sortingModel(
        "Bubble Sort",
        "O(n^2)",
        "O(1)",
        "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
        "https://en.wikipedia.org/wiki/Bubble_sort",
        "https://github.com/PrafullSaxena/Sorting-Algorithms/tree/main/BubbleSort"
      );

      return bubbleModule;
  }

  public createReduxSortModel() : sortingModel{
    // Data to be validated
    const reduxModule = new sortingModel(
      "Redux Sort",
      "O(n + k)",
      "O(n + k)",
      "Redux is a pattern and library for managing and updating application state, using events called 'actions'. It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.",
      "https://en.wikipedia.org/wiki/Radix_sort",
      "https://github.com/PrafullSaxena"
    );
    return reduxModule;
}


  public createShellSortModel() : sortingModel{
    // Data to be validated
    const shellSortModule = new sortingModel(
      "Shell Sort",
      "O(n log n)",
      "O(1)",
      "Shell sort is a generalized version of the insertion sort algorithm. It first sorts elements that are far apart from each other and successively reduces the interval between the elements to be sorted. The interval between the elements is reduced based on the sequence used.",
      "https://en.wikipedia.org/wiki/Shellsort",
      "https://github.com/PrafullSaxena"
    );
    return shellSortModule;
}

public createMergeSortModel() : sortingModel{
  // Data to be validated
  const mergeSortModule = new sortingModel(
    "Merge Sort",
    "O(n log n)",
    "O(1)",
    "Merge Sort is a divide and conquer algorithm. It works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.",
    "https://en.wikipedia.org/wiki/Merge_sort",
    "https://github.com/PrafullSaxena"
  );
  return mergeSortModule;
}

public createSelectionSortModel() : sortingModel{
  // Data to be validated
  const selectionSortModule = new sortingModel(
    "Selection Sort",
    "O(n^2)",
    "O(1)",
    "The Selection Sort is a very basic sort. It works by finding the smallest element in the array and putting it at the beginning of the list and then repeating that process on the unsorted remainder of the data.",
    "https://en.wikipedia.org/wiki/Selection_sort",
    "https://github.com/PrafullSaxena/Sorting-Algorithms/tree/main/SelectionSort"
  );
  return selectionSortModule;
}

public createInsersionSortModel() : sortingModel{
  // Data to be validated
  const insersionSortModule = new sortingModel(
    "Insersion Sort",
    "O(n^2)",
    "O(1)",
    "nsertion sort is a sorting algorithm in which the elements are transferred one at a time to the right position. In other words, an insertion sort helps in building the final sorted list, one item at a time, with the movement of higher-ranked elements. An insertion sort has the benefits of simplicity and low overhead.",
    "https://en.wikipedia.org/wiki/Insertion_sort",
    "https://github.com/PrafullSaxena"
  );
  return insersionSortModule;
}





  // public  swapElement(linesArray : sortObj[], i: number): sortObj[]{
  //     this.linesArray[i].hight = this.linesArray[i].hight  ^ this.linesArray[i + 1].hight ;
  //     this.linesArray[i + 1].hight  = this.linesArray[i].hight  ^ this.linesArray[i + 1].hight ;
  //     this.linesArray[i].hight  = this.linesArray[i].hight  ^ this.linesArray[i + 1].hight ;

  //     return linesArray;
  // }

  // public async bubbleSortAlgo(linesArray : sortObj[], sleepDelay : number): Promise<sortObj[]> {

  //     for (let lastUnsortedIndex = this.linesArray.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--) {


  //         for (let index = 0; index < lastUnsortedIndex; index++) {


  //             if (this.linesArray[index].hight  > this.linesArray[index + 1].hight ) {
  //                 await sleep(sleepDelay);
  //                 linesArray = this.swapElement(linesArray, index)
  //             }
  //         }
  //     }

  //     return linesArray;
  // }
}
