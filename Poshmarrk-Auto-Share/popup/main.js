//---------------------------------------------------------------------------------
// Shares all items in the current closet view to any active party when clicked. Make sure to filter in only the items that are allowed by the party before using this tool.
function shareToActiveParty(tabs) {
  let interval = setInterval(() => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      shareToActivePartyWaiter(Array.from(document.getElementsByClassName('icon share-gray-large')))
      clearInterval(interval)
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
  }, 4000);
}

async function shareToActivePartyWaiter(obj, index = 0) {
  let share;
  obj[index].click()
  setTimeout(() => {
    console.log(obj[index])
    console.log('index: ', index)
    share = document.getElementsByClassName('party-info');
    // share[index].click();
    share[0].click();
    // if (index < obj.length - 1) {
    //   waiter(obj, index + 1)
    // }
  }, 200);
  setTimeout(() => {
    if (index < obj.length - 1) {
      waiter(obj, index + 1)
    }
  }, 1000);
  return
}
//---------------------------------------------------------------------------------

//---------------------------------------------------------------------------------
// document.getElementByID("")

function shareUserCloset(tabs) {
    console.log(tabs[0].url);
}

/**
 * Just log the error to the console.
 */
function reportError(error) {
    console.error(`Could not beastify: ${error}`);
}

//---------------------------------------------------------------------------------

//---------------------------------------------------------------------------------
/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
function initPopup() {
    console.log("Initializing popup...");
    document.getElementById("btn-share-profile").addEventListener("click", function() {
	browser.tabs.query({active: true, currentWindow: true})
	    .then(shareUserCloset)
	    .catch(reportError);
    });
    document.getElementById("btn-share-to-party").addEventListener("click", function() {
	browser.tabs.query({active: true, currentWindow: true})
	    .then(shareToActiveParty)
	    .catch(reportError);
    });
    // document.addEventListener("click", (e) => {
    // 	/**
    // 	 * Get the active tab,
    // 	 * then call "beastify()" or "reset()" as appropriate.
    // 	 */

}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
    document.querySelector("#popup-content").classList.add("hidden");
    document.querySelector("#error-content").classList.remove("hidden");
    console.error(`Failed to execute beastify content script: ${error.message}`);
}

// /**
//  * When the popup loads, inject a content script into the active tab,
//  * and add a click handler.
//  * If we couldn't inject the script, handle the error.
//  */
// browser.tabs.executeScript({file: "/content_scripts/beastify.js"})
//     .then(initPopup)
//     .catch(reportExecuteScriptError);
initPopup();
//---------------------------------------------------------------------------------
