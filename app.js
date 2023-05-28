const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const cors = require('cors');
// Serve static files from the 'public' directory
app.use(express.static('public'));
app.get('/things-to-do', (req, res) => {
  // Read the strings from the file
  fs.readFile('things-to-do.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading file');
    }
    // Split the data into an array of strings
    const textList = data.split('\n');

    // Remove empty strings from the array
    const filteredList = textList.filter(text => text.trim() !== '');

    // Select a random string from the filtered list
    const randomText = filteredList[Math.floor(Math.random() * filteredList.length)];

    // Return the randomly selected string as the response
    res.send(randomText);
});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})