;(function() {
  "use strict";

  var BaseController = require("BaseController");

  new BaseController({
    playPause: "#mute",
    playNext: ".actionlink[onclick=\"randomSettings();\"]",
    playPrev: "#reset",
    mute: "#mute",
  });
})();
