function deleteNth(arr, n) {
    const MAX_OCC = n;
    const DICT = {};
    const output = arr.filter((number) => {
        number = String(number);
        if (DICT[number] === 'undefined' || typeof DICT[number] === 'undefined' || DICT[number] < MAX_OCC) {

            if (typeof DICT[number] !== 'number') {
                DICT[number] = 0;
                DICT[number] += 1;
            } else {
                DICT[number] += 1;
            }


            return true;
        } else {
            return false;
        }

    });
    console.log('-'.repeat(10));
    console.log(`arr->${arr},\noutput->${output},\nDict->${JSON.stringify(DICT)}`);
    console.log('-'.repeat(10));
    return output;
}
deleteNth([20, 37, 20, 21], 1);
deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3);