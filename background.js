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


browser.menus.onClicked.addListener((info, _tab) => {
  switch (info.menuItemId) {
    case "tangorin-lookup":
      browser.tabs.create({
        url: `https://tangorin.com/words?search=${encodeURIComponent(info.selectionText)}`
      });
      break;
  }
});
