// tokenize.js
// generates custom links if a word has the "@" infront of it

$.each($('.msg'), function() {

  var msgText = $(this).text().split(" ");

  for (var i = 0; i < msgText.length; i++) {
    if(msgText[i].match(/@/)) {
      var customLink = "/path/to/profile/of/mentionee";
      msgText[i] =  "<a href='" + customLink + msgText[i].substring(1) + "'>" + msgText[i] + "</a>";
    }
  }

  $(this).html(msgText.join(" "));

});
