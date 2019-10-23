document.addEventListener('DOMContentLoaded', function() {
// begins to listen for content changes

    slowMath.add( 6, 2 )
    .then ((sum) => {
        console.log(`Sum of 6 and 2 is ${sum}`);
        return slowMath.multiply(sum, 2)    // Multiply by 2
    })  .then ((result) => {
        console.log(`Multiply this by 2 to get ${result}`);
        return slowMath.divide(result, 4)  // Divide by 4
    })  .then ((result) => {
        console.log(`Divide this by 4 to get ${result}`);
        return slowMath.subtract(result, 3) // Subtract by 3
    })  .then ((subt) => {
        console.log(`Subtract 3 from this to get ${subt}`);
        return slowMath.add(subt, 98) // Add 98
    })  .then ((sum) => {
        console.log(`Add 98 to this to get ${sum}`);
        return slowMath.remainder(sum, 2) // Remainder of dividing by 2
    })  .then ((remainder) => {
        console.log(`This after dividing by 2 is ${remainder}`);
        return slowMath.multiply(remainder, 50) // Multiply by 50
    })  .then ((product) => {
        console.log(`Add 50 to this to get ${product}`);
        return slowMath.remainder(product, 40) // Remainder of dividing by 40
    })  .then ((remainder) => {
        console.log(`This after dividing by 40 is ${remainder}`);
        return slowMath.add(remainder, 32) // Adds 32
    })  .then ((sum) => {
        console.log(`Add 32 to this to get ${sum}`); // logs the  final answer
        console.log(`The final tally of this in slowMath is ${sum}!`); //Console log final result
    })

        // this is the error catch function
        .catch((err) => {
            console.log('There is an error!');
            console.log(err);
        })

})// Closes the DOMContentLoaded Function from above

setTimeout(function () {
async function doMath() {
  try {
    let newResult = await slowMath.add(6,2)
      console.log(newResult);
    newResult = await slowMath.multiply(newResult, 2)
      console.log(newResult);
    newResult = await slowMath.divide(newResult, 4)
      console.log(newResult);
    newResult = await slowMath.subtract(newResult, 3)
      console.log(newResult);
    newResult = await slowMath.add(newResult, 98)
      console.log(newResult);
    newResult = await slowMath.remainder(newResult, 2)
      console.log(newResult);
    newResult = await slowMath.multiply(newResult, 50)
      console.log(newResult);
    newResult = await slowMath.remainder(newResult, 40)
      console.log(newResult);
    newResult = await slowMath.add(newResult, 32)
      console.log(newResult);
      console.log(`The slowMath result using await for Async is: ${newResult}`)
    }
      catch(err) {
        console.log(err);
      }
}
doMath();
}, 10000);


