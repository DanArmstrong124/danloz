var countDownDateOne = new Date("Nov 24, 2022 00:00:00").getTime();
var countDownDateTwo = new Date("Apr 1, 2022 00:00:00").getTime();
var countDownDateThree = new Date("Oct 18, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    var year = 365;

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distanceOne = countDownDateOne - now;
  var distanceTwo = countDownDateTwo - now;
  var distanceThree = countDownDateThree - now;

  // Time calculations for days, hours, minutes and seconds
  var days1 = Math.floor(distanceOne / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distanceOne % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distanceOne % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distanceOne % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("ani").innerHTML = days1 + "d " + hours1 + "h "
    + minutes1 + "m " + seconds1 + "s ";

  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distanceTwo / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distanceTwo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distanceTwo % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distanceTwo % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("dan").innerHTML = days2 + "d " + hours2 + "h "
    + minutes2 + "m " + seconds2 + "s ";

      // Time calculations for days, hours, minutes and seconds
  var days3 = Math.floor(distanceThree / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distanceThree % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distanceThree % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distanceThree % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("loz").innerHTML = days3 + "d " + hours3 + "h "
    + minutes3 + "m " + seconds3 + "s ";
  
    // If the count down is finished, write some text
    if (distanceOne < 0) {
      document.getElementById("ani").innerHTML = "Happy Anniversary!!!";
    }
    if (distanceTwo < 0) {
        document.getElementById("ani").innerHTML = "Happy Birthday Dan!!!";
      }
      if (distanceThree < 0) {
        document.getElementById("ani").innerHTML = "Happy Birthday Lauren!!!";
      }

      var aniper = (days1 / year) * 100;
      var danper = (days2 / year) * 100;
      var lozper = (days3 / year) * 100;

      document.getElementById('danbar').style.width = danper + "%";
      document.getElementById('lozbar').style.width = lozper + "%";
      document.getElementById('anibar').style.width = aniper + "%";
    
  }, 1000);