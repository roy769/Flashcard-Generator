//to allow read/write
var fs = require("fs");

//constructor
        var BasicCard = function(back, front)
      {
        this.front = front;
        this.back = back;
        this.printInfo = function()
        {
            console.log("1: " + this.front + this.back);
        }
      }

        var flashcard =  newBasicCard("the president smells like","twinkie");

        flashcard.printInfo();

      module.exports = BasicCard;
