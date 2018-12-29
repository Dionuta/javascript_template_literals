//ways to write a string
const singleQuotes = '<p>Single quotes</p>';
const doubleQuotes = "<p>Double quotes</p>";
const tempLateLiteral = `<p>Template Literal</p>`;

const result = singleQuotes + doubleQuotes + tempLateLiteral;
document.querySelector('.basic').innerHTML = result;
