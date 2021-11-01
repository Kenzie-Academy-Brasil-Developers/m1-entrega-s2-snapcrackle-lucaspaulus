
// Fiz uma mudança, coloquei else if no lugar dos if, agora deu certo.
function snapCrackle(maxValue) {
    let word = [];
    for (let value = 1; value <= maxValue; value++) {
        
        if (value % 2 !== 0) {
            word.push(" Snap ");

        } 

        else if (value % 5 === 0) {
            word.push(" Crackle ");
        }   

        else if (value % 5 === 0 && value % 2 !== 0) {
            word.push(" SnapCrackle ");
        }
            
        
        else if (value % 5 !== 0 && value % 2 == 0) {
            word.push(" " + value + " ");
        } 
        
        
        
      }

      return word.join()
}

console.log(snapCrackle(12))