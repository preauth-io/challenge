const findFirstSum = (array: Array<number>, sumResult: number ): Array<number> | string => {
    const result: Array<number> = [];

    while (array.length > 0) {
        const currentNum = array[0];
        if(currentNum <= sumResult) {
            array.splice(0, 1);
            const neededNumber: number = sumResult - currentNum;
            if(array.includes(neededNumber)) {
                result.push(currentNum, neededNumber);
                break;
            }
        } else {
            array.splice(0, 1);
        }
    }

    if(result.length > 0) {
        return result;
    } else {
        return `No pair of numbers that sum ${sumResult} where found`;
    }
}

const array: Array<number> = [2, 5, 8, 14, 0];
const sumResult: number = 10;

console.log(findFirstSum(array, sumResult));