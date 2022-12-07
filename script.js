
// Define date
let item = ['chicken', 'frog', 'train', 'cyclist', 'orange'];
let destination = ['egg', 'pond', 'station', 'tour de france', 'smoothie'];

console.log(item, destination)

// Create prototype for random item
Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }

// Function to print random message 
const printMessage = () => {
    return `Why did the ${item.random()} cross the road? To get to the ${destination.random()}`
}

console.log(printMessage());