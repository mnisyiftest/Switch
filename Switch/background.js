console.log("Background script running");

chrome.browserAction.onClicked.addListener(testFun);

function testFun(){
	console.log("Cursor clicked");
	
	let msg = {
		txt: "Execute"
	}
	chrome.tabs.sendMessage(tab.id, msg);
}