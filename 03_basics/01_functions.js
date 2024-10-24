// functions

function addTwoNumbers(num1, num2)
{
    return num1+num2;
}

const result = addTwoNumbers(3,4);
// console.log(result);

function userLoginMessage(userName)
{
    if (!userName) {
        return 'Please enter a user name';
    }
    return `${userName} just logged in.`;
}

// console.log(userLoginMessage('test'));
// console.log(userLoginMessage());

function calculateCartPrice(...price)
{
    return price;
}

// console.log(calculateCartPrice(100,200, 5000));

const user = {
    name:'abc',
    price: 199
}

function handleObject(anyObject)
{
    console.log(`user name is ${anyObject.name} and price is ${anyObject.price}`);
}

handleObject(user);
