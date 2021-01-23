

function getPalindrome(num, count = 0){
    const reversNum = getReversNum(num)
    if(num === reversNum){
        return {result: num, step: count,}
    }else{
        try{
            num += reversNum;
                return getPalindrome(num, ++count);
        }catch(e){
            console.log(e);
        }
    }
}
    function getReversNum(num){
        let strNum = String(num);
        return +strNum.split('').reverse().join('');
    }

console.log(getPalindrome(196));
console.log(getPalindrome(11));
console.log(getPalindrome(23));
console.log(getPalindrome(45));
