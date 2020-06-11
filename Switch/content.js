
console.log("Extension is running");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
	console.log(message.txt);

	var text = "";
	if (window.getSelection){
		text = window.getSelection().toString();
	} else if (document.selection && document.selection.type != "Control"){
		text = document.selection.createRange().text;
	}

	console.log(text);
}