let inputs = process.argv.slice(3);
let command = process.argv[2];
if (command === 'sum') {
    console.log(Number(inputs[0]) + Number(inputs[1]));
}

else if (command === 'minus') {
    console.log(Number(inputs[0]) - Number(inputs[1]));
}

else if (command === 'print') {
    let obj = {
        name: inputs[0],
        family: inputs[1],
        email: inputs[2]
    };
    console.log(obj);
}

else if (command === 'print2') {
    let obj = {
        x: inputs[0],
        y: inputs[1],
        z: inputs[2]
    };
    for (let i in obj) {
        console.log('salam ' + obj[i]);
    }
}

else if (command === 'write') {
    let obj = {
        name: inputs[0],
        family: inputs[1],
        email: inputs[2]
    };
    let fs = require('fs');
    fs.writeFile('./data.txt', JSON.stringify(obj), function (error, data) {
        if (error) {
            console.log('ERROR:', error);
        }
        else {
            console.log('Success:', data);
        }
    });
}

else {
    console.log('Command not found');
}