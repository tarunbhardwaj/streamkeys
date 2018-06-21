;(function() {
  "use strict";

  var BaseController = require("BaseController");

  var controller = new BaseController({
    siteName: "YouTube",
    playPause: ".ytp-play-button",
    playNext: ".ytp-next-button",
    playPrev: ".ytp-prev-button",
    mute: ".ytp-mute-button",
    like: "#menu > ytd-menu-renderer > #top-level-buttons > ytd-toggle-button-renderer:nth-child(1)",
    dislike: "#menu > ytd-menu-renderer > #top-level-buttons > ytd-toggle-button-renderer:nth-child(2)",

    playState: ".ytp-play-button[aria-label='Pause']",
    song: ".title.ytd-video-primary-info-renderer",
    album: "#playlist .title",
    hidePlayer: true
  });

  controller.getArtData = function() {
    var params = (new URL(controller.doc().location)).searchParams;

    var vid = params.get("v");
    if (vid !== null) {
      return "https://img.youtube.com/vi/" + vid + "/default.jpg";
    }
    return null;
  };

  controller.playNext = function() {
    var rtPlaySelector = "#real-time-playlist-div .pl-list .list-item:first-child img";
    var nextSelector = this.selectors.playNext;
    if (this.doc().querySelector(rtPlaySelector)) {
      nextSelector = rtPlaySelector;
    }
    this.click({action: "playNext", selectorButton: nextSelector, selectorFrame: this.selectors.iframe});
  };

})();
