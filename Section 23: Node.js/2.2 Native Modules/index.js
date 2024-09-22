const fs = require("fs"); // File system

// Node : Write file
// fs.writeFile("message.txt", "Hello from NodeJS", (err) => {
//     if(err) throw err;
//     console.log("The file has been saved!");
// })


// [Challenge: Read message.txt file]
fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
