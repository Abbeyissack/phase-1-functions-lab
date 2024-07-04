// Code your solution in this file!
var pickupLocation = 55;//pick location var
var headQuater = 45;//head quater street/block

//calculate distance of blocks between pickuplocation and headQuater

function distanceFromHqInBlocks(pickupLocation) {
    //returns the number of blocks given a value
    var blocks  = pickupLocation - headQuater;
    return blocks;

  }

  console.log(distanceFromHqInBlocks(55));

  

  //func for feet
  function distanceFromHqInFeet() {
    distanceFromHqInBlocks(blocks);
    let distanceInFeet = blocks * 264;
    return distanceInFeet;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  console.log(distanceFromHqInFeet());
