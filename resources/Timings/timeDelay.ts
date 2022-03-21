// let minValue: number = 6;
// let maxValue: number = 300;
// let default_hight: number = 100;

// export function sleep(ms: number){
//   // console.log("Inside Sleep");
//   return new Promise<void>( res => { setTimeout(() => res(), ms)});
// }

export class addDelay {

  public defaultDelay: number = 100;

  constructor(){}

  public sleep(ms: number){
    return new Promise<void> (
      res => {
        setTimeout(() => res(), ms)
      }
    );
  }
}
