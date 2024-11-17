
const coding = ['js', 'php', 'python', 'cpp', 'java']
// coding.forEach(function (val) {
//     console.log(val);
// })

coding.forEach( (val) => {
    // console.log(val);
})

// function printME(item) {
//     console.log(item)
// }

// coding.forEach(printME)
// coding.forEach( (item, index, arrayList) => {
//     console.log(item, index, arrayList);
// } )

const myCoding = [
    {
        languageName: "Javascript",
        languageFile: 'JS'
    },
    {
        languageName: "java",
        languageFile: 'Java'
    },
    {
        languageName: "Python",
        languageFile: 'py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
} )