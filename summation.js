
// summation algorithm
function Summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i; // add each iteration
    }
    return sum;
}

const analysis = [] // analysis object

//test starts
// for (let i = 200000; i < 500000000000; i = i + 50000) {
//     const start = Date.now(); // track start time?
//     const SumOfI = Summation(i);
//     const end = Date.now();
//     // console.log(`end ${end} - start ${start} = ${end - start}`)
//     console.log(`${JSON.stringify({
//         num: i,
//         summation: SumOfI,
//         totalTime: end - start
//     })}`);
//     // analysis.push({
//     //     num: i,
//     //     summation: SumOfI,
//     //     totalTime: end - start
//     // });
// }

const start = performance.now();
const SumOfI = Summation(98700000);
const end = performance.now();
console.log(`total time: ${end - start} and summation is ${SumOfI}`);


// console.log(analysis)