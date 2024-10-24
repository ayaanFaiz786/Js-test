// scopes

// global scope
let a = 300;
const b = 200;

if (true) {
    // block scope
    let a = 10;
    const b = 20;
    // console.log(a);
}

// console.log(a);
// console.log(b);

function one()
{
    const username = 'abc';

    function two()
    {
        const website = 'youtube';
        // will be accessible
        console.log(username);
    }

    // will not be accessible
    // console.log(website)

    two();
}

// one();

// similarly in if and for variables will not be accessible beyond scope

if (true){
    const name = 'asd';
    // console.log(name);
}
// not accessible
// console.log(name);

function addOne(num)
{
    return num+1;
}

addOne(3);

const addTwo = function addTwo(num)
{
    return num+2;
}

addTwo(5);