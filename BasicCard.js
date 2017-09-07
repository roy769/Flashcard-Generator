var fs = require("fs");

//constructor
       Basic = function frontToggle(back, front)
      {
        this.front = front;
        this.back = back;
        this.flipCard = function()
          {
            if (this.front === true)
            {
              console.log(this.back);
            }
          };


      }

      module.exports = BasicCard;
