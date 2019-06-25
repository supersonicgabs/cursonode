function sumAllEven(list) {  
    var filtrado = list.filter(function(value){
        if(value % 2 === 0 || typeof value === 'object'){
            return value;
        }
    });
    var somaTotal = 0;
    var somaObject = 0;
    var filtradoLength = filtrado.length;
    for(let i = 0; i<filtradoLength; i++){
        if(typeof filtrado[i] === 'object'){            
            var filtradoArray = filtrado[i];
            for(let c=0; c<filtradoArray.length; c++){
                somaObject += filtradoArray;
            }
            return somaObject;
        }
        somaTotal += filtrado[i]+somaObject;
    }
    return somaTotal;

}
console.log(sumAllEven(["0",[0,1,2,3,null,4],[5,[6,7,8,9,[10,11,12]]],"John"]));
// console.log(sumAllEven([1,2,3,4,5,6]));

