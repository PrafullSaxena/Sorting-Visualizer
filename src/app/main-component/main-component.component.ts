import { I18nSelectPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { sleep } from 'resources/sleep';
import { sortingModel } from 'resources/sortingModel';
import { sortObj } from 'resources/sortObj';
import { SortingServiceService } from '../sorting-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {




  // number of lines values
  minValue: number = 6;
  maxValue: number = 300;
  default_hight: number = 100;
  // ScrollBar variables ends

  // Show Index on the fotter variables
  showIndex: boolean = false;
  showIndexValue: number = 0;

  //  Lines Array
  linesArray: sortObj[] = [];
  isStopClicked: boolean = false;
  isRunningAlgo: boolean = false;

  // Delay
  delayinMS: number = 100;      // 1 sec = 1000 ms
  minDelay: number = 0;         // min = 0
  maxDelay: number = 1500;     // let's keep it 3000

  // Algo releated veriables
  selectedAlgo: string = "Bubble Sort";
  // selectedAlgo : string = "Selection Sort";

  // Variables for Module

  constructor(private sortService: SortingServiceService) { }

  sortingModel = new sortingModel(
    "Bubble Sort",
    "O(n^2)",
    "O(1)",
    "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
    "https://en.wikipedia.org/wiki/Bubble_sort",
    "https://github.com/PrafullSaxena/Sorting-Algorithms/tree/main/BubbleSort"
  );

  ngOnInit(): void {
    this.setRandom(this.default_hight);
  }

  public setSpeed(maxSpeedinMS: number): void {
    this.delayinMS = maxSpeedinMS;
  }

  public setRandom(maxValue: number): void {

    this.isRunningAlgo = false;
    // this.sortingModel = this.sortService.createBubbleSortModel();
    this.default_hight = maxValue;
    this.linesArray = [];
    for (let i = 1; i <= maxValue; i++) {
      let line = new sortObj(
        Math.floor(Math.random() * 22) + 1,
        this.sortService.setLineCorolToDefault()
      );
      this.linesArray.push(line);
    }
  }

  public resetHightToDefault(): void {
    this.setRandom(this.default_hight);
  }


  public startAlgo(): void {

    if (this.selectedAlgo === "Bubble Sort") {
      this.bubbleSortAlgo();
    } else if (this.selectedAlgo === "Selection Sort") {
      this.selectionSort();
    } else if (this.selectedAlgo === "Inserstion Sort") {
      this.insertionSortAlgo();
      this.isRunningAlgo = false;
    }else if (this.selectedAlgo === "Merge Sort") {
        // this.calledMerge();


    } else {
      alert("You have selected " + this.selectedAlgo + ", which isn't completed, Please select Bubble Sort, Selection Sort or Insersion");
    }

    // else if (this.selectedAlgo === "Merge Sort") {
    //   this.mergeSortAlgo(0, this.linesArray.length - 1);
    // }

  }


  public SelectingAlgos(algo: string): void {


    if (algo == "Bubble Sort") {
      this.selectedAlgo = algo;
      this.sortingModel = this.sortService.createBubbleSortModel();
    } else if (algo == "Shell Sort") {
      this.selectedAlgo = algo;
      this.sortingModel = this.sortService.createShellSortModel();
    } else if (algo == "Redux Sort") {
      this.selectedAlgo = algo;
      this.sortingModel = this.sortService.createReduxSortModel();
    } else if (algo == "Merge Sort") {
      this.selectedAlgo = algo;
      this.sortingModel = this.sortService.createMergeSortModel();
    } else if (algo == "Selection Sort") {
      this.selectedAlgo = algo;
      this.sortingModel = this.sortService.createSelectionSortModel();
    } else if (algo == "Inserstion Sort") {
      this.selectedAlgo = algo;
      this.sortingModel = this.sortService.createInsersionSortModel();
    }
  }


  public onClickStop() {
    this.isStopClicked = true;
    this.setRandom(this.default_hight);
    // alert("you clicked on stop");
  }


  public swapElement(index1: number, index2: number): void {
    this.linesArray[index1].hight = this.linesArray[index1].hight ^ this.linesArray[index2].hight;
    this.linesArray[index2].hight = this.linesArray[index1].hight ^ this.linesArray[index2].hight;
    this.linesArray[index1].hight = this.linesArray[index1].hight ^ this.linesArray[index2].hight;

    this.linesArray[index1].color = this.sortService.setCompareLine2();
    this.linesArray[index2].color = this.sortService.setCompareLine1();
  }


  // ============== Algorithms ==============
  public async bubbleSortAlgo(): Promise<void> {

    this.isRunningAlgo = true;

    for (let lastUnsortedIndex = this.linesArray.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--) {

      if (this.isStopClicked) {
        this.isStopClicked = false;
        break;
      }

      this.linesArray[lastUnsortedIndex].color = this.sortService.setLastLine();

      for (let index = 0; index < lastUnsortedIndex; index++) {

        if (this.isStopClicked) {
          break;
        }

        this.linesArray[index].color = this.sortService.setCompareLine1();
        this.linesArray[index + 1].color = this.sortService.setCompareLine2();
        await sleep(this.delayinMS);
        if (this.linesArray[index].hight > this.linesArray[index + 1].hight) {
          this.swapElement(index, index + 1);
          await sleep(this.delayinMS);
        }

        // this.linesArray[index].color = this.sortService.setSortedArray();
        // this.linesArray[index + 1].color = this.sortService.setSortedArray();
        this.linesArray[index].color = this.sortService.setLineCorolToDefault();
        this.linesArray[index + 1].color = this.sortService.setLineCorolToDefault();
      }

      this.linesArray[lastUnsortedIndex].color = this.sortService.setSortedArray();
      // this.linesArray[lastUnsortedIndex].color = this.sortService.setLineCorolToDefault();
    }

    this.isRunningAlgo = false;

  }


  // ============== Bubble Sort Algorithms : Ends ==============

  // ============== Selection Sort Algorithms : Start ==============

  public async selectionSort(): Promise<void> {
    this.isRunningAlgo = true;
    for (let lastIndex = this.linesArray.length - 1; lastIndex >= 0; lastIndex--) {

      if (this.isStopClicked) {
        this.isStopClicked = false;
        break;
      }

      this.linesArray[lastIndex].color = this.sortService.setLastLine();   // Green

      let maxHightIndex = 0;
      this.linesArray[0].color = this.sortService.setCompareLine1();  // RED

      for (let index = 1; index <= lastIndex; index++) {
        this.linesArray[index].color = this.sortService.setCompareLine2();   // Yellow

        if (this.isStopClicked) {
          break;
        }

        if (this.linesArray[index].hight > this.linesArray[maxHightIndex].hight) {
          this.linesArray[maxHightIndex].color = this.sortService.setLineCorolToDefault();
          maxHightIndex = index;
          this.linesArray[maxHightIndex].color = this.sortService.setCompareLine1();
        }
        await sleep(this.delayinMS);
        this.linesArray[index].color = this.sortService.setLineCorolToDefault();
        if (maxHightIndex == index) {
          this.linesArray[maxHightIndex].color = this.sortService.setCompareLine1();
        }
      }
      // this.swapElement(lastIndex, maxHightIndex);
      this.swapWithTemp(lastIndex, maxHightIndex);
      await sleep(this.delayinMS);
      this.linesArray[maxHightIndex].color = this.sortService.setLineCorolToDefault();
      this.linesArray[lastIndex].color = this.sortService.setSortedArray();
    }

    this.isRunningAlgo = false;
  }

  // ============== Selection Sort Algorithms : End ==============


  // ============== Insertion Sort Algorithms : Start ==============

  public swapWithTemp(index1: number, index2: number): void {
    let temp = this.linesArray[index1].hight;
    this.linesArray[index1].hight = this.linesArray[index2].hight;
    this.linesArray[index2].hight = temp;
    this.linesArray[index1].color = this.sortService.setCompareLine2();
    this.linesArray[index2].color = this.sortService.setCompareLine1();
  }


  public async insertionSortAlgo(): Promise<void> {

    this.isRunningAlgo = true;

    for (let lastSortedIndex = 0; lastSortedIndex < this.linesArray.length; lastSortedIndex++) {

      if (this.isStopClicked) {
        this.isStopClicked = false;
        break;
      }

      for (let anSortedIndex = lastSortedIndex + 1; anSortedIndex > 0; anSortedIndex--) {

        this.linesArray[anSortedIndex].color = this.sortService.setCompareLine1();
        this.linesArray[anSortedIndex - 1].color = this.sortService.setCompareLine2();

        await sleep(this.delayinMS);

        if (this.isStopClicked) {
          break;
        }

        if (this.linesArray[anSortedIndex].hight < this.linesArray[anSortedIndex - 1].hight) {
          this.swapElement(anSortedIndex, anSortedIndex - 1);
        } else {
          await sleep(this.delayinMS);

          this.linesArray[anSortedIndex].color = this.sortService.setSortedArray();
          this.linesArray[anSortedIndex - 1].color = this.sortService.setSortedArray();
          break;
        }
        await sleep(this.delayinMS);

        this.linesArray[anSortedIndex].color = this.sortService.setSortedArray();
        this.linesArray[anSortedIndex - 1].color = this.sortService.setSortedArray();
      }
      this.linesArray[lastSortedIndex].color = this.sortService.setSortedArray();
    }

    this.isRunningAlgo = false;
  }
  // ============== Insertion Sort Algorithms : End ==============



  // ============== Merge Sort Algorithms : Start ==============

  public merge(arr : number[], l : number, m : number, r : number)
  {
      var n1 = m - l + 1;
      var n2 = r - m;

      // Create temp arrays
      var L = new Array(n1);
      var R = new Array(n2);

      // Copy data to temp arrays L[] and R[]
      for (var i = 0; i < n1; i++)
          L[i] = arr[l + i];
      for (var j = 0; j < n2; j++)
          R[j] = arr[m + 1 + j];

      // Merge the temp arrays back into arr[l..r]

      // Initial index of first subarray
      var i = 0;

      // Initial index of second subarray
      var j = 0;

      // Initial index of merged subarray
      var k = l;

      while (i < n1 && j < n2) {
          if (L[i] <= R[j]) {
              arr[k] = L[i];
              i++;
          }
          else {
              arr[k] = R[j];
              j++;
          }
          k++;
      }

      // Copy the remaining elements of
      // L[], if there are any
      while (i < n1) {
          arr[k] = L[i];
          i++;
          k++;
      }

      // Copy the remaining elements of
      // R[], if there are any
      while (j < n2) {
          arr[k] = R[j];
          j++;
          k++;
      }
  }

  // l is for left index and r is
  // right index of the sub-array
  // of arr to be sorted */
  public mergeSort(arr : number[],l : number, r : number){
      if(l>=r){
          return;//returns recursively
      }
      var m = r + l / 2;
      this.mergeSort(arr,l,m);
      this.mergeSort(arr,m+1,r);
      this.merge(arr,l,m,r);
  }

  public mergeSortAlgo(left: number, right: number): void {

    if (left < right) {

      let mid = (left + right) / 2;

      if (mid == 1) return;

      this.mergeSortAlgo(left, mid);
      this.mergeSortAlgo(mid + 1, right);

      // this.merge(left, mid, right);
    }

  }

  public calledMerge() : void {
    let newArray = [];
    for(let i = 0; i < this.linesArray.length; i++){
      newArray.push(this.linesArray[i].hight);
    }

    this.mergeSort(newArray,0, newArray.length - 1);

    console.log(newArray);

  }


}

