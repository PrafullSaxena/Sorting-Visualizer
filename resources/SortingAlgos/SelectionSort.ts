import { defaultConfig } from './../utils/Configurations';
import { runConfig } from './../utils/Configurations';
import { lines } from './../LinesObjects/LinesClass';
import { putDelay, sleep } from 'resources/sleep';


export class SelectionSort{

  public async run(lines: lines[]) : Promise<void>  {

    let defaultConf = new defaultConfig();

    if(runConfig.isClickStop){
      runConfig.isClickStop = false;
      return;
    }

    for (let lastIndex = lines.length - 1; lastIndex >= 0; lastIndex--) {


      lines[lastIndex].color = defaultConf.LAST_LINE;   // Green

      let maxHightIndex = 0;
      lines[0].color = defaultConf.LINE_ONE;  // RED

      for (let index = 1; index <= lastIndex; index++) {
        lines[index].color = defaultConf.LINE_TWO;   // Yellow

        if(runConfig.isClickStop){
          runConfig.isClickStop = false;
          return;
        }

        if (lines[index].hight > lines[maxHightIndex].hight) {
          lines[maxHightIndex].color = defaultConf.DEFAULT_LINE;
          maxHightIndex = index;
          lines[maxHightIndex].color = defaultConf.DEFAULT_LINE;
        }
        await sleep(runConfig.timeDealy);
        lines[index].color = defaultConf.DEFAULT_LINE;
        if (maxHightIndex == index) {
          lines[maxHightIndex].color = defaultConf.LINE_ONE;
        }
      }
      let temp = lines[lastIndex].hight;
      lines[lastIndex].hight = lines[maxHightIndex].hight;
      lines[maxHightIndex].hight = temp;

      await sleep(runConfig.timeDealy);
      lines[maxHightIndex].color = defaultConf.DEFAULT_LINE;
      lines[lastIndex].color = defaultConf.SORTED_ARRAY;
    }
  }

}
