// program which accepts one or more numbers as
// command-line arguments and prints their sum

var args = process.argv.slice(2);
console.log(args.reduce( (prev, curr) => Number(prev) + Number(curr) ));