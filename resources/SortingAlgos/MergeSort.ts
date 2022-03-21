import { defaultConfig } from './../utils/Configurations';
import { runConfig } from './../utils/Configurations';
import { lines } from './../LinesObjects/LinesClass';
import { putDelay, sleep } from 'resources/sleep';
import { ComponentFactoryResolver } from '@angular/core';


export class MergeSort{

  public async run(lines: lines[]) : Promise<void>  {
    
  }

  public devide() : void {
      
  }


}



// export default function Merge(items: number[]): number[] {
//   return divide(items);
// }

function divide(items: number[]): number[] {
  var halfLength = Math.ceil(items.length / 2);
  var low = items.slice(0, halfLength);
  var high = items.slice(halfLength);
  if (halfLength > 1) {
      low = divide(low);
      high = divide(high);
  }
  return combine(low, high);
}

function combine(low: number[], high: number[]): number[] {
  var indexLow = 0;
  var indexHigh = 0;
  var lengthLow = low.length;
  var lengthHigh = high.length;
  var combined = [];
  while (indexLow < lengthLow || indexHigh < lengthHigh) {
      var lowItem = low[indexLow];
      var highItem = high[indexHigh];
      if (lowItem !== undefined) {
          if (highItem === undefined) {
              combined.push(lowItem);
              indexLow++;
          } else {
              if (lowItem <= highItem) {
                  combined.push(lowItem);
                  indexLow++;
              } else {
                  combined.push(highItem);
                  indexHigh++;
              }
          }
      } else {
          if (highItem !== undefined) {
              combined.push(highItem);
              indexHigh++;
          }
      }
  }
  
  return combined;
}
