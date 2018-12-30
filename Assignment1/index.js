//Assignment1.js
const csvtojson = require('csvtojson/v2');
const fs = require('fs');
const path = require('path');

/*
 USAGE: node Assignment1.js <csvDataFile> <jsonFileName>
 This is main function for transforming data from CSV to JSON format.
 It assumes csvDataFile as "customer-data.csv", if csvDataFile is not provided.
 It assumes jsonFileName to be same as csvDataFile with .json extension if not provided.
*/
const transformer = (csvDataFile, jsonFileName) => {
   if (csvDataFile == null){
     csvDataFile = path.join(__dirname, 'customer-data.csv')
   }
    console.log('Data file:',csvDataFile);
    const dataTransformer = csvtojson().fromFile(csvDataFile);
    let recordCounter = 0


     if(jsonFileName == null){
       jsonFileName = csvDataFile.split('.')[0]+'.json';
       console.log('Default JSON file:',jsonFileName);
     }


   console.log('Writing JSON Data to: ',jsonFileName);
    dataTransformer.then( (jsonData)=>{
       fs.writeFileSync(jsonFileName, JSON.stringify(jsonData, null, 2));
    })

   dataTransformer.on('data', (data)=>{
    recordCounter++;
   });

  // Log sucess or failure
   dataTransformer.on('done', (error)=>{

     if(error){
        console.log('============== ERROR ==============');
       console.log(error.message);
       process.exit(1);
     }else{
        console.log('============== SUCCESS ==============');
       console.log("Successufully converted ",recordCounter, "records from CSV to JSON");
     }

   })

}

/*
  Start the CVS to JSON trasformation.
*/
transformer(process.argv[2],process.argv[3]);
