browser.browserAction.onClicked.addListener((tab_obj) => {
  console.log(tab_obj.url);

  const concatItem = tab_obj.url.indexOf("?") == -1 ? "?" : "&";
  const tabLocation = tab_obj.url + concatItem + "department=Women&availability=available";

  var updating = browser.tabs.update(tab_obj.id, {url: tabLocation})
  updating.then((tab_obj) => {
    console.log("Navigated to available women's items");
  }, (tab_obj) => {
    console.error("Failed to navigate.");
  });
});
