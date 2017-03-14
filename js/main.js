const lowers =['chris', 'holly', 'larry', 'audrey', 'ingrid'];
const uppers = lowers.map(name => name.toUpperCase());
uppers.forEach(name => console.log(`Hello, ${name}`));