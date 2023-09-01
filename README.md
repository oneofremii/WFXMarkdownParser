# WFXMarkdownParser

A versatile and customizable Markdown to HTML parser developed by WeFusionX (mikaaa.dev).

## Features

- Converts Markdown text to HTML.
- Supports a wide range of Markdown syntax.
- Easily customizable with extensions.
- Works in Node.js and the browser.

## Installation

You can install this package via npm:

```bash
npm install wfx-markdown-parser
```

## Usage
```javascript
const markdownParser = require('wfx-markdown-parser');

const markdownText = `
# Sample Markdown

This is **bold** and _italic_ text.

- Item 1
- Item 2

[Link to Google](https://www.google.com)
`;

const htmlOutput = markdownParser(markdownText);
console.log(htmlOutput);
```

## Configuration

### Customizing the parser
You can customize the parser by passing options to it. For example:

```javascript
const markdownParser = require('wfx-markdown-parser');

const customOptions = {
  // Your custom options here
};

const htmlOutput = markdownParser(markdownText, customOptions);
```

## Advanced Usage
### Handling Extension

You can extend the parser with additional features using extensions. Here's an example of how to use an extension:
```javascript
const markdownParser = require('wfx-markdown-parser');
const emojiExtension = require('wfx-markdown-parser-emoji-extension');

markdownParser.use(emojiExtension);

const htmlOutput = markdownParser(markdownText);
```

## Contributing
We welcome contributions! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
1. Create a new branch for your feature or bug fix.
1. Make your changes and ensure tests pass.
1. Open a pull request with a clear description of your changes.

## Issues and Support
If you encounter any issues or have questions about using the package,[ please open an issue](/issues/). We're here to help!

## License
This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```rust
You can use this template as a starting point for your package's README.md, replacing "wfx-markdown-parser" with the actual name of your npm package and customizing the content further as needed.
```

## Developer and Contributor
* [WeFusionX](https://wfxlabs.rin4ever.xyz)
* [HyMikaaa](https://rin4ever.xyz)

#### Other Credit
* [Jsdom](https://www.npmjs.com/package/jsdom)
* [Jsdom Global](https://www.npmjs.com/package/jsdom-global)