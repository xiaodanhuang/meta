/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

var leastInterval = function (tasks, n) {
    let map=new Map();
    let max_count=0;
    for(let task in tasks){
        if(map.get(task)){
            map.set(task,map.get(task)+1);
        }else{
            map.set(task,1);
        }
        if(map.get(task)>max_count){
            max_count=map.get(task);
        }
    }
};
let tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2;

console.log(leastInterval(tasks, n))
