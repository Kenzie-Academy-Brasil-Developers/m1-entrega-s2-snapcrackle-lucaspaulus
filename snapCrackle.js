function snapCrackle(maxValue){
    let word = []
    for (let value = 1; value <= maxValue; value++){
        if (value % 2 !== 0){
            
            word.push('Snap ')
        }
        if (value % 5 == 0){
            
            word.push('Crackle ')
        }
        if (value % 5 == 0 && value % 2 !== 0){

            word.push('SnapCrackle ')
        }
        if (value % 5 !== 0 && value % 2 == 0){

            word.push(value)
        }
        
    }
    return word
}