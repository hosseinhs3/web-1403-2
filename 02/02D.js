let inputs = process.argv.slice(3);
let command = process.argv[2];
if (command === 'sum') {
    console.log(Number(inputs[0]) + Number(inputs[1]));
}
else if (command === 'minus') {
    console.log(Number(inputs[0]) - Number(inputs[1]));
}
else {
    console.log('Command not found');
}