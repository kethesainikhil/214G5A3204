const express = require('express');
const axios = require('axios');

const app = express();
const port = 8000;

app.get('/numbers', async (req, res) => {
  const combinedUrls = req.query.url;

  if (!combinedUrls) {
    return res.json([]);
  }
//this is for checking as map function not working on single length, so used this 
  const urlArray = combinedUrls

if(urlArray.length > 1 && combinedUrls.length < 32 ){
    try {
        const uniqueNumbers = new Set();
    
        const axiosPromises = urlArray.map(async (url) => {
          try {
            const response = await axios.get(url);
            const responseData = response.data;

        // this is to check whether it has valid datastructure or not as we uesd type numbers 
            if (responseData.numbers && Array.isArray(responseData.numbers)) {
              responseData.numbers.forEach(item => {
                if (typeof item === 'number') {
                  uniqueNumbers.add(item);
                }
              });
            } else {
              console.error("datastructure is not a number");
            }
          } catch (error) {
            console.error(error.message);
          }
        });
        //this is for waiting for all pending responses to get fulfilled as we used in map funciton
        await Promise.all(axiosPromises);
        
        // Convert the set of unique numbers back to an array
        const uniqueNumbersArray = Array.from(uniqueNumbers);
    
        res.json(uniqueNumbersArray);
      } catch (error) {
        console.log(error)
      }
}
else{
    try {
        const response = await axios.get(urlArray);
        const responseData = response.data;
        res.json(responseData)
    } catch (error) {
        console.error(error.message);
      }
      
}
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
