import {txtToHtml, htmlToTxt, fetchSourceText} from '/parser.js';
(async () => {
	const heading = document.createElement('h1');
	const parserOutput = document.createElement('div');
	const sourceText = await fetchSourceText();

	heading.append(document.title);
	parserOutput.id = 'parser-output';
	parserOutput.innerHTML = txtToHtml(sourceText, 'javascript-docs');
	document.body.append(heading, parserOutput);
})();
