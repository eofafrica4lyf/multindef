function mult(arr){
    if(!Array.isArray(arr)){
        return '...';
    }
    for(var i = 0; i < arr.length;i++){
        if(typeof(arr[i]) !== 'number'){
            return '....';
        }
    }
}

module.exports = mult;