const markdownIt = require("markdown-it")();

function parseMarkdown(markdownText) {
  return markdownIt.render(markdownText);
}

module.exports = parseMarkdown;
