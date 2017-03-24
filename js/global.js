'use strict'



const setGoodGlobal = function () {
  global.myGlobalVar = 42
}

setGoodGlobal();

console.log(myGlobalVar)