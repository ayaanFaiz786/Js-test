// reduce()
const nums = [1, 2, 3];
const total = nums.reduce( function (accumulator, $currVal) {
    console.log(`Accumulator : ${accumulator} and current vale : ${$currVal}`);
    return accumulator+$currVal;
}, 0)

console.log(total);