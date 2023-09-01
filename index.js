const parseMarkdown = require('./markdownParser');

const markdownText = `
# Sample Markdown

This is **bold** and _italic_ text.

- Item 1
- Item 2

[Link to Google](https://www.google.com)
`;

const htmlOutput = parseMarkdown(markdownText);
console.log(htmlOutput);