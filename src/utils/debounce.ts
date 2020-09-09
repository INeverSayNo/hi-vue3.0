 export const debounce=function(func:Function,wait:number,immediate:boolean):Function{
    let timer:undefined|number;
    return function(...arg:any){
        clearTimeout(timer);
        if(immediate && !timer) func.apply(this,arg);
        timer=setTimeout(() => {
            timer=undefined;
            if(!immediate){
                func.apply(this,arg)
            }
        }, wait);
        
    }
}
