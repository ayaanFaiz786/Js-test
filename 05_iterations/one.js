// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }

// break and continue
// for (let index = 1; index < 10; index++) {
//     if (index == 5) {
//         console.log(`Detected value ${index}`);
//         break;
//     }
//     console.log(`Value is ${index}`);
    
// }

for (let index = 1; index < 10; index++) {
    if (index == 5) {
        console.log(`Detected value ${index}`);
        continue;
    }
    console.log(`Value is ${index}`);
    
}