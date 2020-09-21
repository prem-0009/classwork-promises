console.clear();
// 1.
// Create a promise called myFirstPromise
// Inside the promise

// Create a variable rand and it should calculate a random number between 1 and 10
// Create a boolean variable check and set it to true

// If the check boolean is true it should resolve with the
// result of a random number between one and ten
// Both resolve and reject should only occur after 2 seconds

let myFirstPromise = new Promise((resolve, reject) => {
  let check = true;

  if (check) {
    setTimeout(() => {
      let rand = Math.floor(Math.random() * 10);
      resolve(rand);
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Cannot compute random number");
    }, 2000);
  }
});
//2nd step
// Now call the promise you created and chain your thenables.
// In your first thenable
// console.log('I have my random number <the number> and I will multiply it by 5')
// Multiply your random number by 5 and pass the data to the next thenable
// In your second thenable log a String
// that says `Here is the result of my random number multiplied
// by 5: < place number result here>`
// if the check boolean is false, it should reject with
// a string that says: Cannot computer random number
myFirstPromise
  .then((data) => {
    console.log(`I have my random ${data} and I will multiply it by 5.`);
    return data * 5;
  })
  .then((data2) => {
    console.log(
      `Here is the result of my random number multiplied by 5: ${data2}.`
    );
  })
  .catch((error) => {
    console.log(error);
  });

// 2.
let data = [
  { firstName: "Joe", lastName: "Peters" },
  { firstName: "Doug", lastName: "Lawson" },
  { firstName: "Sandra", lastName: "Mathers" },
];
// create a function called getDataPromise that returns a promise
// inside the function create an error variable and set it to boolean false
// create a conditional that handles the rejection if there is an error with a message 'Something went wrong'
// Create a set timeout function that after 4 seconds returns the data (we are mimicking a 3rd party API call)

const getDataPromise = (info) => {
  return new Promise((resolve, reject) => {
    let error = false;
    if (!error) {
      setTimeout(() => {
        resolve(info);
      }, 4000);
    } else {
      setTimeout(() => {
        reject();
        // return(data)
      }, 4000);
    }
  });
};
//2nd step
// consume your promise
// take the result and log the data
// take data and output 'Hello Joe Peters' for each object
// This should be 3 separate steps
// Handle the error in case there is one
// Test by setting your error variable to false then true

getDataPromise(data)
  .then((data) => {
    data.map((item) => {
      console.log(`Hello ${item.firstName} ${item.lastName}.`);
    });
  })
  .catch(() => {
    console.log("something went wrong");
  });
