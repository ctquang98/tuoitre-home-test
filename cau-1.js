let data = ['a', 'b', 'c', 'a', 'd', 'd', 'b', 'b'];

function countArray(data) {
    let data2 = data.reduce((accumulator, currentValue) => {
        if(!accumulator.length) {
            accumulator.push(currentValue);
            return accumulator;
        }
        else {
            for(let i = 0; i < accumulator.length; i++) {
                if(accumulator[i][0] === currentValue) {
                    accumulator[i] += currentValue;
                    return accumulator;
                }
            }
            accumulator.push(currentValue);
            return accumulator;
        }
    }, []);
    
    let data3 = data2.map(d => ({ [d[0]]: d.length }));

    return data3;
}

console.log(countArray(data));