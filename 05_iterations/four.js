const myObject = {
    jv: "Java",
    cpp: "C++",
    ruby: "Ruby",
    swift: "Swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} is ${myObject[key]}`)
}

const arr = ['jv', 'cpp', 'ruby', 'php', 'swift']
// for in loop can be used for array and object but not with maps
for (const key in arr) {
    console.log(arr[key]);
}