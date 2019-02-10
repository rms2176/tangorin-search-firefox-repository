function onCreated() {
  if (browser.runtime.lastError)
    console.log(`Error: ${browser.runtime.lastError}`);
  else
    console.log("Item created successfully");
}

function onRemoved() {
  console.log("Item removed successfully");
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.menus.create({
  id: "tangorin-lookup",
  title: "Look up word on Tangorin...",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "goo-lookup",
  title: "Look up word on Goo...",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "yahoo-lookup",
  title: "Look up word on Yahoo...",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "weblio-lookup",
  title: "Look up word on Weblio...",
  contexts: ["selection"]
}, onCreated);

browser.menus.create({
  id: "wikipedia-lookup",
  title: "Look up word on Wikipedia...",
  contexts: ["selection"]
}, onCreated);

browser.menus.onClicked.addListener((info, _tab) => {
  switch (info.menuItemId) {
    case "tangorin-lookup":
      browser.tabs.create({
        url: `https://tangorin.com/words?search=${encodeURIComponent(info.selectionText)}`
      });
      break;

    case "goo-lookup":
      browser.tabs.create({
        url: `https://dictionary.goo.ne.jp/srch/jn/${encodeURIComponent(info.selectionText)}/m0u/`
      });
      break;

    case "yahoo-lookup":
      browser.tabs.create({
        url: `https://dic.yahoo.co.jp/search/?p=${encodeURIComponent(info.selectionText)}&fr=dic&stype=full&ei=UTF-8`
      });
      break;

    case "weblio-lookup":
      browser.tabs.create({
        url: `https://www.weblio.jp/content/${encodeURIComponent(info.selectionText)}`
      });
      break;

    case "wikipedia-lookup":
      browser.tabs.create({
        url: `https://ja.wikipedia.org/wiki/${encodeURIComponent(info.selectionText)}`
      });
      break;
  }
});
