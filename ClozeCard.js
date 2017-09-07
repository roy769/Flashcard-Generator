var fs =require("fs");
var Basic = require(./BasicCard)

//open array for cloze an partial text
      var frontcard = [];
//constructor
       Cloze = function backToggle(text, cloze)
      {
      //stackoverflow
      this.text = text;
      this.cloze = cloze;
      this.partial = text.replace(cloze,"...");
      }

//if question side is chosen put answer on back

//on click load next

module.exports = ClozeCard;
