window.onload = function() {
  var slider = document.getElementById("volumeRange");
  var output = document.getElementById("currentVolume");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      let url = tabs[0].url;

      if (url.substring(0, 33) === "https://www.audible.com/webplayer") {
        chrome.tabs.executeScript(null, {       
          code : "document.getElementById(\"audio-player\").volume="+ output.innerHTML/100}
        );
      }

    });
  }
}
