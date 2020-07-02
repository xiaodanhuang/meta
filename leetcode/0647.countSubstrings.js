/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let len=s.length;
    if(len<2) return len;
    var num=0;
    const centerSpread=(i,j)=>{
        while(i>=0,j<len){
            if(s[i]===s[j]){
                num++;
                i--;
                j++;
            }else{
                break;
            }
        }
    }
    for(let i=0;i<len;i++){
        centerSpread(i,i);
        centerSpread(i,i+1);
    }
    return num;
};

