browser.browserAction.onClicked.addListener((tab_obj) => {
  let redirect = false;
  let newUrl = "";
  if (tab_obj.url.indexOf("?") == -1) {
    redirect = true
    const concatItem = tab_obj.url.indexOf("?") == -1 ? "?" : "&";
    newUrl = tab_obj.url + "?department=Women&availability=available";
  } else {
    const params = ((ab)=>{
      return ab.split("?")[1].split("&").reduce((map, obj) => {
        map[obj.split("=")[0]] = obj.split("=")[1]; return map;
      }, {});
    })(tab_obj.url);
    console.table(params);

    if (params.propertyIsEnumerable("department")) {
      if (params.department != "Women") {
        redirect = true;
      }
      delete params.department;
    } else {
      redirect = true;
    }

    if (params.propertyIsEnumerable("availability")) {
      if (params.availability != "available") {
        redirect = true;
      }
      delete params.availability;
    } else {
      redirect = true;
    }
    console.log(params);

    const remainingParams = Object.getOwnPropertyNames(params).map((i) => {return i + "=" + params[i]}).join("&");
    console.log(remainingParams);
    newUrl = tab_obj.url.split("?")[0] + "?department=Women&availability=available&" + remainingParams;
    console.log(newUrl);
  }

  if (redirect) {
    console.log(`Navigating to URL: ${newUrl}...`)
    var updating = browser.tabs.update(tab_obj.id, {url: newUrl})
    updating.then((tab_obj) => {
      console.log("Navigated to available women's items");
    }, (tab_obj) => {
      console.error("Failed to navigate.");
    });
  } else {
    console.log(`Skipping navigation. Sharing closet...`);
    browser.tabs.executeScript(tab_obj.id, {file: 'content.js', runAt: 'document_idle'});
  }
});
