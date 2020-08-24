let array = Array(3)

for (let i=0;i<array.length; i++){
    let temp = '1, 3, 3'.split(' ').map(item => {
        return parseInt(item);
    });

    array[i] = temp;
}
let diagonal1=0, diagonal2=0;
let counter = array.length
const function1 = (value, index) =>{
    counter--
    diagonal1+= value[index]
    diagonal2+= value[counter]
}
array.forEach(function1)
console.log(Math.abs(diagonal1 - diagonal2))
