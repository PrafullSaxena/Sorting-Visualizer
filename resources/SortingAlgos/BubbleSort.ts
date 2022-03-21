import { TestSortingComponent } from './../../src/app/test-sorting/test-sorting.component';
import { defaultConfig } from './../utils/Configurations';
import { runConfig } from './../utils/Configurations';
import { lines } from './../LinesObjects/LinesClass';
import { putDelay, sleep } from 'resources/sleep';



export class BubbleSort{

  public async run(lines: lines[]) : Promise<void>  {

    let defaultConf = new defaultConfig();

    for (let lastUnsortedIndex = lines.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--) {

      lines[lastUnsortedIndex].color = defaultConf.LAST_LINE;

      if(runConfig.isClickStop){
        runConfig.isClickStop = false;
        return;
      }

      for (let index = 0; index < lastUnsortedIndex; index++) {


        if(runConfig.isClickStop){
          runConfig.isClickStop = false;
          return;
        }

        lines[index].color = defaultConf.LINE_ONE;
        lines[index + 1].color = defaultConf.LINE_TWO;

        console.log(runConfig.timeDealy);

        await putDelay(runConfig.timeDealy);

        if (lines[index].hight > lines[index + 1].hight) {
          lines[index].hight = lines[index].hight ^ lines[index + 1].hight;
          lines[index + 1].hight = lines[index].hight ^ lines[index + 1].hight;
          lines[index].hight = lines[index].hight ^ lines[index + 1].hight;
        }

        lines[index].color = defaultConf.DEFAULT_LINE;
        lines[index + 1].color = defaultConf.DEFAULT_LINE;
      }
      lines[lastUnsortedIndex].color = defaultConf.SORTED_ARRAY;

    }

  }

}


