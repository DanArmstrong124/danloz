var countDownDateOne = new Date("Nov 24, 2022 00:00:00").getTime();
var countDownDateTwo = new Date("Apr 1, 2022 00:00:00").getTime();
var countDownDateThree = new Date("Oct 18, 2022 00:00:00").getTime();
var countDownDateFour = new Date("Apr 11, 2022 14:40:00").getTime();
var countDownDateFive = new Date("May 9, 2022 14:00:00").getTime();
var countDownDateSix = new Date("Oct 19, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    var year = 365;

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distanceOne = countDownDateOne - now;
  var distanceTwo = countDownDateTwo - now;
  var distanceThree = countDownDateThree - now;
  var distanceFour = countDownDateFour - now;
  var distanceFive = countDownDateFive - now;
  var distanceSix = countDownDateSix - now;

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

          // Time calculations for days, hours, minutes and seconds
  var days4 = Math.floor(distanceFour / (1000 * 60 * 60 * 24));
  var hours4 = Math.floor((distanceFour % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes4 = Math.floor((distanceFour % (1000 * 60 * 60)) / (1000 * 60));
  var seconds4 = Math.floor((distanceFour % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("twe").innerHTML = days4 + "d " + hours4 + "h "
    + minutes4 + "m " + seconds4 + "s ";

        // Time calculations for days, hours, minutes and seconds
        var days5 = Math.floor(distanceFive / (1000 * 60 * 60 * 24));
        var hours5 = Math.floor((distanceFive % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes5 = Math.floor((distanceFive % (1000 * 60 * 60)) / (1000 * 60));
        var seconds5 = Math.floor((distanceFive % (1000 * 60)) / 1000);
      
          // Display the result in the element with id="demo"
          document.getElementById("six").innerHTML = days5 + "d " + hours5 + "h "
          + minutes5 + "m " + seconds5 + "s ";


      // Time calculations for days, hours, minutes and seconds
      var days6 = Math.floor(distanceSix / (1000 * 60 * 60 * 24));
      var hours6 = Math.floor((distanceSix % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes6 = Math.floor((distanceSix % (1000 * 60 * 60)) / (1000 * 60));
      var seconds6 = Math.floor((distanceSix % (1000 * 60)) / 1000);
    
        // Display the result in the element with id="demo"
        document.getElementById("due").innerHTML = days6 + "d " + hours6 + "h "
        + minutes6 + "m " + seconds6 + "s ";
  
    // If the count down is finished, write some text
    if (distanceOne < 0) {
      document.getElementById("ani").innerHTML = "Happy Anniversary!!!";
    }
    if (distanceTwo < 0) {
        document.getElementById("dan").innerHTML = "Happy Birthday Dan!!!";
      }
      if (distanceThree < 0) {
        document.getElementById("loz").innerHTML = "Happy Birthday Lauren!!!";
      }
      if (distanceFour < 0) {
        document.getElementById("twe").innerHTML = "ONE HEALTHY BUBBA!!!";
      }
      if (distanceFive < 0) {
        document.getElementById("six").innerHTML = "WAS IT A GIRL???!!!";
      }
      if (distanceSix < 0) {
        document.getElementById("due").innerHTML = "Happy Birthday Bubba!!!";
      }

      var aniper = (100 - (days1 / year) * 100);
      var danper = (100 - (days2 / year) * 100);
      var lozper = (100 - (days3 / year) * 100);
      var tweper = (100 - (days4 / year) * 100);
      var sixper = (100 - (days5 / year) * 100);
      var dueper = (100 - (days6 / year) * 100);

      document.getElementById('danbar').style.width = danper + "%";
      document.getElementById('lozbar').style.width = lozper + "%";
      document.getElementById('anibar').style.width = aniper + "%";
      document.getElementById('twebar').style.width = tweper + "%";
      document.getElementById('sixbar').style.width = sixper + "%";
      document.getElementById('duebar').style.width = dueper + "%";
    
  }, 1000);

  var timeinput = document.getElementById('timeinput');
  var timeenter = document.getElementById('timeenter');
  var baby = document.getElementById('babysound');
  var timestop = 0;
  var timegone = 0;

  timeenter.addEventListener('click', function(){
  var timer = timeinput.value;
      timestop = timer * 60;
      setTimeout(function(){
        baby.play();
        setInterval(() => {
          timegone = timegone + 1;
          document.title = timegone + " / " + timestop;
          if (timegone == timestop) {
            baby.pause();
            document.title = "Dan & Loz";
            clearInterval;
          };
        }, 1000);
      },50)
  });