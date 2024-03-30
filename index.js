// Function to calculate the distance in blocks from Scuber's headquarters
  function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}
// Function to calculate the distance in feet from Scuber's headquarters
function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}
// function Calculates the distance travelled in feet
function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(startBlock - endBlock);
    // Define the length of one block in feet
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
}
//Calculating  fare price
function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
//check the distance if it greater than 400 and less than 2000.
    if (distance <= 400) {
        return 0;

    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;

    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
                // Return a message indicating that Scuber cannot travel that far
        return 'cannot travel that far';
    }
}

// output on console
console.log(calculatesFarePrice(34, 38)); // Output: 2.56

console.log(distanceFromHqInBlocks(50)); // Output: 8
console.log(distanceFromHqInFeet(50)); // Output: 2112
console.log(distanceTravelledInFeet(34, 38)); // Output: 1056

