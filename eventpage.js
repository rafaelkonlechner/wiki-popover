/**
 * Sends url from sender tab back to the sender
 * (workaround to obtain current url due to permission-issues with content scripts).
 */
chrome.extension.onMessage.addListener( function(message, sender, sendResponse) {
	if(message.text == "URLrequest")
	sendResponse({url: sender.tab.url});
});