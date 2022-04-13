function superbowlWin (array) {
    let lineFound = array.find(element => element.result === "W")
    return lineFound ? lineFound.year : undefined
  }

  //original if else before using ternary 
/*function superbowlWin (array) {
    let lineFound = array.find(element => element.result === "W")
    if (lineFound) {
        return lineFound.year;
      }
        else{
            return undefined;
        }   
      }*/