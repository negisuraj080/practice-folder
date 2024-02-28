const p1 = new Promise((resolve, reject) => {
    // we are trying to mimic an external condition
    const condition = true;
    if (condition) {
      setTimeout(() => {
        resolve("manish is in the class");
      }, 10000);
    } else {
      reject("p1 has been rejected");
    }
  });
  
  // promises are not handling error
  // we need to figure out something
  // Uncaught (in promise) p2 rejected
  console.log("123");
  p1.then((data) => {
    console.log(data);
  });
  console.log("678");