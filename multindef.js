function mult(arr){
    if(!Array.isArray(arr)){
        return '...';
    }
    for(var i = 0; i < arr.length;i++){
        if(typeof(arr[i]) !== 'number'){
            return '....';
        };
        if(arr[i] === 0){
            return 0;
        };
        if(isNaN(arr[i])){
            return 'NaN';
        };
        if(arr[i] === Infinity){
            return 'Infinity';
        };
        if(arr[i] === -Infinity){
            return '-Infinity';
        };
    }
}

module.exports = mult;