/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      };
      
      let letters = s.split("");
      let res = 0;
      //IX
      for (var i = 0; i < letters.length; i++) {
          if (roman[ letters[i] ] < roman[ letters[ i + 1 ] ] ) {
              res -= roman[letters[i]]
          } else {
              res += roman[letters[i]]
          }
      }
      return res;

 
};


module.exports={romanToInt}