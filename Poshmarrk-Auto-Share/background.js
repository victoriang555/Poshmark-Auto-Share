browser.browserAction.onClicked.addListener((tab_obj) => {
  console.log(tab_obj.url);

  // const concatItem = tab_obj.url.indexOf("?") == -1 ? "?" : "&";
  // const tabLocation = tab_obj.url + concatItem + "department=Women&availability=available";

  // var updating = browser.tabs.update(tab_obj.id, {url: tabLocation})
  // updating.then((tab_obj) => {
  //   console.log("Starting content.js...")
  //   browser.tabs.executeScript(tab_obj.id, {file: 'content.js', runAt: 'document_idle'});
  // }, (tab_obj) => {
  //   console.error("Failed to navigate.");
  // });

  browser.tabs.executeScript(tab_obj.id, {file: 'content.js', runAt: 'document_idle'});
});
