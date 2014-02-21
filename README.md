wiki-popover (Google Chrome Extension)
======================================

When reading articles on Wikipedia, you often stumble across terms you don't know. They are linked to their separate Wikipedia article most of the time. Usually, the first few sentences will cover enough info, so that you can go on reading the initial article. With **wiki-popover**, when you hover over one of those links, a popover (tooltip) will display a short description (where the source is again Wikipedia) of the linked term, which will immmensely help your read-flow.

Building and Installing:
-----------------------
At the moment, you will have to build the extension yourself. I'm planing on making it available over my website or possibly over the Chrome Web Store.

###Installation Process:
1. Download the **wiki-popover** source folder
2. Go to [chrome://extensions/](chrome://extensions/) in Google Chrome
2. Enable **Developer mode** on the upper right-hand side
3. Click "Load unpacked extension" and choose the downloaded folder
4. If it is not enabled by default, enable it by checking "Enabled"
5. Visit a [random Wikipedia article](http://en.wikipedia.org/wiki/Special:Random) and give it a try.

Permissions:
------------
The only permission needed by the extension is access to [http://en.wikipedia.org](http://en.wikipedia.org).

Known Bugs:
----------
* Inaccurate or broken description is displayed (please blame non-semantic Mediawiki API).
* When a link is interrupted by a pagebreak '</br>' or by the browser due to available viewport width, the popover does not appear directly over the link, but is missplaced in the center of the screen.