import { Component, OnInit } from '@angular/core';
import { SortingServiceService } from '../sorting-service.service';   // Didn't used it so far
import { lines } from '../../../resources/LinesObjects/LinesClass'
import { addDelay } from '../../../resources/Timings/timeDelay'      // Didn't used
import { runConfig, defaultConfig } from '../../../resources/utils/Configurations'
import { clickTest } from '../../../resources/Tests/MethodTests' // Didn't used it so far

//Importing Sorting Algorithms
import { BubbleSort } from '../../../resources/SortingAlgos/BubbleSort'
import { InsertionSort } from 'resources/SortingAlgos/InsersionSort';
import { MergeSort } from 'resources/SortingAlgos/MergeSort';
import { QuickSort } from 'resources/SortingAlgos/QuickSort';
import { ReduxSort } from 'resources/SortingAlgos/Redux';
import { SelectionSort } from 'resources/SortingAlgos/SelectionSort';
import { ShellSort } from 'resources/SortingAlgos/ShellSort';

@Component({
  selector: 'app-sort',
  templateUrl: './test-sorting.component.html',
  styleUrls: ['./test-sorting.component.css']
})
export class TestSortingComponent implements OnInit {

  //  Lines Array
  line: lines[] = [];

  constructor(private sortService: SortingServiceService) { }

  public timeHandler: addDelay = new addDelay();
  public runConf: runConfig = new runConfig();
  public defaultConf:defaultConfig = new defaultConfig();
  public testclick: clickTest = new clickTest();

  public isRunningAlgo: boolean = false;

  // Creating objects for Algorightms
  private bubbleSort: BubbleSort = new BubbleSort();
  private mergeSort: MergeSort = new MergeSort();
  private insersionSort: InsertionSort = new InsertionSort();
  private quickSort: QuickSort = new QuickSort();
  private reduxSort: ReduxSort = new ReduxSort();
  private selectionSort: SelectionSort = new SelectionSort();
  private shellShort: ShellSort = new ShellSort();

  ngOnInit(): void {
    this.setRandom(this.runConf.numberOfLines);
  }

  public setSpeed(timeDelay : number) {

    console.log(timeDelay);
    runConfig.timeDealy = timeDelay;

  }

  public setRandom(maxValue: number): void {

    runConfig.isClickStop = false;
    // runConfig.timeDealy = this.defaultConf.defaultdelay;
    this.isRunningAlgo = false;
    this.runConf.numberOfLines = maxValue;
    this.line = [];


    for (let i = 1; i <= maxValue; i++) {
      let line = new lines(
        Math.floor(Math.random() * 22) + 1,
        this.sortService.setLineCorolToDefault()
      );
      this.line.push(line);
    }
  }

  public async callingAlgo(algo: string) : Promise<void> {

    this.isRunningAlgo = true;

    if(algo === 'Bubble Sort') {

      await this.bubbleSort.run(this.line);

    }else if (algo == 'Selection Sort'){

      await this.selectionSort.run(this.line);

    }else if (algo == 'Insersion Sort'){
      try{
        await this.insersionSort.run(this.line);
      }catch(e){
        this.isRunningAlgo = false;
      }

    }else if (algo == 'Shell Sort'){

      await this.shellShort.run(this.line);

    }else if (algo == 'Redux Sort'){

      await this.reduxSort.run(this.line);

    }else if (algo == 'Merge Sort'){

      await this.mergeSort.run(this.line);
    }

    this.isRunningAlgo = false;
  }


  public clickStart():void {
    console.log("clickStart")
    // console.log(this.runConf.selectedAlgo)
    this.callingAlgo(this.runConf.selectedAlgo);
  }

}

