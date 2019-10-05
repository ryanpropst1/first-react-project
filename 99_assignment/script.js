//loop thru the fuction using a number arg passed into the parm and log the count with song to the document/console

function singCode(i) {
  //create the loop: init count, conditional to evaluate for loop and increment by 1
  for (var i = i; i > 0; i--) {
    // let m = i
    // let subtract = --m;
    if (i > 1) {
      document.write(i + ' lines of code in the file, ' + i + ' lines of code, ' + 'Ryan strikes one out, clears it all out ' + (i - 1) + ' lines of code in the file,' + '<br>');

    } else {
      document.write(i + ' line of code in the file ' + i + ' line of code,' + ' Ryan has struck the last one out, clears it all out ' + (i - 1) + ' line of code in the file!' + '<br>' + '</br>');
    }
  }
};

singCode(99);


// function that loops thru the count provided by user input as param i
function friendSing(i) {
  for (var i = i; i > 0; i--) {
    // evaluates if loop continues to write the plural lines whilst i>1
    // when i reaches 1 drops thru to the else and writes last line singular
    if (i > 1) {
      document.write(i + ' lines of code in the file, ' + i + ' lines of code, ' + ' Chris strikes one out, clears it all out, ' + (i - 1) + ' lines of code in the file,' + '<br>');
    } else {
      document.write(i + ' line of code in the file ' + i + ' line of code, ' + ' Chris has struck the last one out, clears it all out, ' + (i - 1) + ' line of code in the file!' + '<bv>');
    }
  }
};

//prompts the user to answer how many lines of code does our file contain and stores in var count
let count = prompt('How many lines of code should our file have?');

// calls the friendSing fn with arguement that will be passed
friendSing(count)

