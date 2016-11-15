(function(exports) {

  var author = {
    name: "Cory Meyers",
    date: "11/12/16",
    createdFor: "Hach U",
  };

  exports.weekDay = function() {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return{
        name: function(number) {
          return names[number];
        },
        number: function (name) {
          return names.indexOf(name);
        }
    }
  }();

  exports.hashtag = function() {
    var string = "";
    for (var i = 1; i <= 7; i++) {
        string += "#".repeat(i) + "\n"
    }
    return string;
  }

  exports.travel = function(Vehicle) {
    function Vehicle (type, lat, long, speed, full, vehicleNumber, timeLate) {
        this.type = type
        this.lat = lat;
        this.long = long;
        this.speed = speed;
        this.full = full;
        this.vehicleNumber = vehicleNumber;
        this.timeLate = timeLate;
    }

    Vehicle.prototype.info = { city: "Portland", state: "Oregon", agency: "Trimet" };

    Vehicle.prototype.getInfo = function () {
        console.log("Type: " + this.type + "\nLine: " + this.vehicleNumber + "\nLocation: " + this.lat + ", " + this.long);
    };

    Vehicle.prototype.updateLocation = function (newLat, newLong) {
        this.lat = newLat;
        this.long = newLong;
    };
  }

  exports.gradeAssigner = function(score1) {
    if (score1 <= 100 && score1 >= 90) {
      var grade1 = "A";
    } else if (score1 <= 89 && score1 >= 80) {
        var grade1 = "B";
    } else if (score1 <= 79 && score1 >= 70) {
        var grade1 = "C";
    } else if (score1 <= 69 && score1 >= 60) {
        var grade1 = "D";
    } else if (score1 <= 69 && score1 >= 60) {
        var grade1 = "F";
    }
    console.log("Your letter grade equivalent is " + grade1 + ".")
  };

  exports.isEven = function(N) {
    if (N !==0 && N !==1) {
        return exports.isEven(N-2);
    } else if (N === 0) {
        return ("even");
    } else return ("odd");
  };

  exports.smallest = function(x,y) {
    if (x < y) {
      return x;
    } else if (y > x) {
      return y;
    } else {
      return "They are both equal."
    }
  };

  exports.beanCounter = function(string) {
    var count=0;
    var N = 0;
    do {
      if (string.charAt(N)==="B") {
         count += 1;
         N += 1;
      } else N += 1;
    }
     while (N <= string.length);
     return count;
  };

  exports.arraySum = function(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++)
      total += array[i];
    return total;
  };

})(this.library = {});
