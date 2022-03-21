export function sleep(ms: number){
    // console.log("Inside Sleep");
    return new Promise<void>( res => { setTimeout(() => res(), ms)});
}

export function putDelay(ms: number){
  // console.log("Inside Sleep");
  return new Promise<void>( res => { setTimeout(() => res(), ms)});
}
