/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// Inquirer https://www.npmjs.com/package/inquirer
// qr-image https://www.npmjs.com/package/qr-image#qr-image

// User interaction
import { input } from '@inquirer/prompts';

 // QR code generation
import qr from "qr-image";

// File system access
import fs from "fs"; 

const url = await input({ message: 'Enter the URL' });

var qr_image = qr.image(url);

qr_image.pipe(fs.createWriteStream('qr_code_img.png'));

fs.writeFile("URL.txt", url, (err) => {
    if(err) throw err;
    console.log("The file has been saved!");
});