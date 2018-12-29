# Introduction to NODEJS

## *CSV to JSON conversion*

Main file for the conversion is index.js inside Assignment1 folder. It is using "csvtojson" module for
transforming csv to JSON format. It expect source .csv file path and target JSON file name. If source file path is not provided it looks for customer-data.csv as default source file in current folder and if target JSON file name is not provided then it will use .csv fie name with .json extension as target JSON file.

** Steps: ** (assuming npm is already installed)
```
git clone https://github.com/alokrai75/NODEJS.git
cd NODEJS
npm install
node Assignment1/index.js [csvfilename jsonfilename]
```   
