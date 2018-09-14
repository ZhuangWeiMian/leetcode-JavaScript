/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var stack = [];
    var result = 0;
    var number = 0;
    var sign = 1;
    var c = ''
    for(var i = 0; i < s.length; i++){
        c = s[i];
        if( c == ' ' )continue
        if( +c == +c ){
            number = 10 * number + (c * 1);
        }else if(c == '+'){
            result += sign * number;
            number = 0;
            sign = 1;
        }else if(c == '-'){
            result += sign * number;
            number = 0;
            sign = -1;
        }else if(c == '('){
            stack.push(result);
            stack.push(sign);
            sign = 1;   
            result = 0;
        }else if(c == ')'){
            result += sign * number;  
            number = 0;
            result *= stack.pop();   
            result += stack.pop();  
        }
    }
    if(number != 0) result += sign * number;
    return result;
};