export class runConfig{

  public numberOfLines : number = 80;

  public static timeDealy: number = 100;

  public static isClickStop : boolean = false;

  public selectedAlgo : string = 'Bubble Sort';

  public SelectAlgo(algo : string): void {

    if (algo === 'Bubble') {
      this.selectedAlgo = "Bubble Sort";
    }else if (algo === 'Selection' ){
      this.selectedAlgo = "Selection Sort";
    }else if (algo === 'Insersion' ){
      this.selectedAlgo = "Insersion Sort";
    }else if (algo === 'Shell' ){
      this.selectedAlgo = "Shell Sort";
    }else if (algo === 'Redux' ){
      this.selectedAlgo = "Redux Sort";
    }else if (algo === 'Merge' ){
      this.selectedAlgo = "Merge Sort";
    }
  }

  public onClickStop() : void {
    runConfig.isClickStop = true;
  }

}



export class defaultConfig{

  //Line Colors
  public DEFAULT_LINE : string = "#a598ff"; //Light Purple
  public LINE_ONE : string = "#FC2F00"; // Red
  public LINE_TWO : string = "#FFFF00";  // Yellow
  public SORTED_ARRAY : string = "rgba(141, 51, 255, 1)"; /// purple
  public LAST_LINE : string =  "#00FF00"; //Green

  //Number of Lines
  public minNumberOfLines : number = 6;
  public maxNumberOfLines : number = 300;

  //Time Delay
  public minDelay: number = -100;
  public maxDelay: number = 1500;
  public defaultdelay : number = 100;

}
