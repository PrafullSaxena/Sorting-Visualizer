import { defaultConfig } from './../utils/Configurations';
import { runConfig } from './../utils/Configurations';
import { lines } from './../LinesObjects/LinesClass';
import { putDelay, sleep } from 'resources/sleep';


export class InsertionSort{

  public async run(lines: lines[]) : Promise<void>  {

    let defaultConf = new defaultConfig()

    for (let lastSortedIndex = 0; lastSortedIndex < lines.length; lastSortedIndex++) {

      if(runConfig.isClickStop){
        runConfig.isClickStop = false;
        return;
      }

      for (let anSortedIndex = lastSortedIndex + 1; anSortedIndex > 0; anSortedIndex--) {


        if(runConfig.isClickStop){
          runConfig.isClickStop = false;
          return;
        }

          lines[anSortedIndex].color = defaultConf.LINE_ONE;
          lines[anSortedIndex - 1].color = defaultConf.LINE_TWO;

        if (lines[anSortedIndex].hight < lines[anSortedIndex - 1].hight) {
          await sleep(runConfig.timeDealy);

          lines[anSortedIndex].hight = lines[anSortedIndex].hight ^ lines[anSortedIndex - 1].hight;
          lines[anSortedIndex - 1].hight = lines[anSortedIndex].hight ^ lines[anSortedIndex - 1].hight;
          lines[anSortedIndex].hight = lines[anSortedIndex].hight ^ lines[anSortedIndex - 1].hight;

        } else {
           await sleep(runConfig.timeDealy);

          lines[anSortedIndex].color = defaultConf.SORTED_ARRAY;
          lines[anSortedIndex - 1].color = defaultConf.SORTED_ARRAY;

          break;
        }

          lines[anSortedIndex].color = defaultConf.SORTED_ARRAY;
          lines[anSortedIndex - 1].color = defaultConf.SORTED_ARRAY;

      }
      lines[lastSortedIndex].color = defaultConf.SORTED_ARRAY;

    }
  }

}
