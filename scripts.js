var arr = [-1, 4, 21, -7];

function getAbsSum(arr) {

    // absolute value array

    const absoluteValueArray = (array) => {
        return array.map(Math.abs);
    }

    arr = (absoluteValueArray(arr));

    // reduce array

    const initialValue = 0;
    const sumWithInitial = arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );

    return sumWithInitial;

}

getAbsSum(arr);