var dailyTemperatures = function(T) {
    let arr=[];
    arr[T.length-1]=0;
    for(let i=T.length-2;i>=0;i--){
        for(let j=i+1;j<T.length;j++){
            if(T[i]<T[j]){
                arr[i]=j-i;
                break
            }else if(arr[j]===0){
                arr[i]=0;
                break;
            }
        }
    }
    return arr;
};
