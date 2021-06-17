function shareCloset() {
  console.log("Starting closet share...")
  const elements = Array.from(document.getElementsByClassName('icon share-gray-large'));
  if (elements.length == 0) {
    alert("No closet items found.");
  } else {
    const max=8;
    // alert(`Sharing ${max} items...`)
    shareClosetItems(elements, 0, max);
  }
}

function shareClosetItems(elements, i, max) {
  console.log(`Click share ${i}/${max}...`);
  elements[i].click();
  setTimeout(() => {
    console.log(`Sharing ${i}/${max}...`);
    document.getElementsByClassName('share-wrapper__share-title')[0].click();
  }, 200);
  setTimeout(() => {
    if (i < max) {
      console.log(`Doing stuff...`);
      shareClosetItems(elements, i+1, max);
    }
  }, 1000);
}

shareCloset();
