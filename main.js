let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length); //24
secretMessage.pop();
console.log(secretMessage.length); //23
secretMessage.push('to', 'Program');
secretMessage[7] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6, 5, 'know');
console.log(secretMessage.join(' '));

/* Output:
Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to Program
*/