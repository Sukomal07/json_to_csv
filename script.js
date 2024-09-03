const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');
const { stringify } = require('csv-stringify');

// Directories and output file
const inputDir = 'real-estate-data-csv';
const outputFile = 'properties.csv';

// Array to hold all rows
let allRows = [];
let headers = null;

// Function to read a CSV file and extract its rows
const readCsvFile = (filePath) => {
    return new Promise((resolve, reject) => {
        const rows = [];
        fs.createReadStream(filePath)
            .pipe(parse({ columns: true, trim: true }))
            .on('data', (row) => rows.push(row))
            .on('end', () => resolve(rows))
            .on('error', (error) => reject(error));
    });
};

// Function to combine all CSV files into one
const combineCsvFiles = async () => {
    try {
        // Check if the directory exists
        if (!fs.existsSync(inputDir)) {
            console.log(`Directory not found: ${inputDir}`);
            return;
        }

        const files = fs.readdirSync(inputDir).filter(file => path.extname(file) === '.csv');

        // Check if the directory is empty
        if (files.length === 0) {
            console.log(`No CSV files found in the directory: ${inputDir}`);
            return;
        }

        for (const file of files) {
            const filePath = path.join(inputDir, file);
            const rows = await readCsvFile(filePath);

            // Extract headers from the first file
            if (!headers && rows.length > 0) {
                headers = Object.keys(rows[0]);
            }

            allRows = allRows.concat(rows);
        }

        if (headers) {
            // Write combined rows to the output CSV file
            stringify(allRows, { header: true, columns: headers }, (err, output) => {
                if (err) throw err;
                fs.writeFileSync(outputFile, output);
                console.log(`Combined CSV file created: ${outputFile}`);
            });
        } else {
            console.log('No data found in CSV files.');
        }
    } catch (error) {
        console.error('Error combining CSV files:', error);
    }
};

// Run the script to combine CSV files
combineCsvFiles();
