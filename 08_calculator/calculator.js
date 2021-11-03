const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;	
};

const sum = function(arr) {
  let total=0;
  arr.forEach(element => {
    total+=element;
    
  });
  return total;
  	
};

const multiply = function(arr) {
  let result=1;
  arr.forEach(element=>result*=element);
  return result;
  
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  // 4x3x2x1
  let result=1;
  while(a>1) {
    result*=a;
    a--;
  }	
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
