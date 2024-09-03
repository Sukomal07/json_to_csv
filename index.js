const fs = require('fs');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const inputDir = 'real-estate-data-json';  // Folder that contains all json files
const outputDir = 'real-estate-data-csv';  // Folder that will contains all csv files

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Function to convert JSON to CSV
const convertJsonToCsv = (inputFile, outputFile) => {
    const json = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
    const properties = json.listResults.map(property => {
        const homeInfo = property.hdpData ? property.hdpData.homeInfo : {};
        return {
            title: property.title || 'Lorem',
            link: property.detailUrl || 'Lorem',
            collectionId: property.collectionId || 'Lorem',
            localeId: property.localeId || 'Lorem',
            itemId: property.id || 'Lorem',
            createdOn: property.createdOn || 'Lorem',
            updatedOn: property.updatedOn || 'Lorem',
            publishedOn: property.publishedOn || 'Lorem',
            featuredImage: property.imgSrc || 'Lorem',
            galleryImages: property.carouselPhotos ? property.carouselPhotos.map(photo => photo.url).join('; ') : 'Lorem',
            thumbnailV1: property.imgSrc || 'Lorem',
            thumbnailV2: property.imgSrc || 'Lorem',
            thumbnailV3: property.imgSrc || 'Lorem',
            about: property.about || 'Lorem',
            summary: property.summary || 'Lorem',
            excerpt: property.excerpt || 'Lorem',
            isFeatured: homeInfo.isFeatured || 'Lorem',
            address: property.address || 'Lorem',
            sqft: homeInfo.livingArea || 'Lorem',
            bathrooms: property.baths || 'Lorem',
            bedrooms: property.beds || 'Lorem',
            parkingSpots: property.parkingSpots || 'Lorem',
            displayPrice: property.price || 'Lorem',
            airConditioner: property.airConditioner || 'Lorem',
            cableTv: property.cableTv || 'Lorem',
            dishwasher: property.dishwasher || 'Lorem',
            fireExtinguisher: property.fireExtinguisher || 'Lorem',
            elevator: property.elevator || 'Lorem',
            garden: property.garden || 'Lorem',
            internet: property.internet || 'Lorem',
            pool: property.pool || 'Lorem',
            laundry: property.laundry || 'Lorem',
            securityCameras: property.securityCameras || 'Lorem',
            iron: property.iron || 'Lorem',
            gym: property.gym || 'Lorem',
            kitchen: property.kitchen || 'Lorem',
            grill: property.grill || 'Lorem',
            refrigerator: property.refrigerator || 'Lorem',
            heater: property.heater || 'Lorem',
            chimney: property.chimney || 'Lorem',
            sportFields: property.sportFields || 'Lorem',
            petFriendly: property.petFriendly || 'Lorem',
            smokingArea: property.smokingArea || 'Lorem',
            microwave: property.microwave || 'Lorem',
            lockpad: property.lockpad || 'Lorem',
            kidsZone: property.kidsZone || 'Lorem',
            garage: property.garage || 'Lorem',
            category: property.category || 'Lorem',
            type: property.statusText || 'Lorem',
            location: property.addressState || 'Lorem',
        };
    });

    const csvWriter = createCsvWriter({
        path: outputFile,
        header: [
            { id: 'title', title: 'Property Listing - Title' },
            { id: 'link', title: 'Property Listing - Link' },
            { id: 'collectionId', title: 'Collection ID' },
            { id: 'localeId', title: 'Locale ID' },
            { id: 'itemId', title: 'Item ID' },
            { id: 'createdOn', title: 'Created On' },
            { id: 'updatedOn', title: 'Updated On' },
            { id: 'publishedOn', title: 'Published On' },
            { id: 'featuredImage', title: 'Property Listing - Featured Image [Page]' },
            { id: 'galleryImages', title: 'Property Listing - Gallery Images [Page]' },
            { id: 'thumbnailV1', title: 'Property Listing - Thumbnail Image V1 [Card]' },
            { id: 'thumbnailV2', title: 'Property Listing - Thumbnail Image V2 [Card]' },
            { id: 'thumbnailV3', title: 'Property Listing - Thumbnail Image V3 [Card]' },
            { id: 'about', title: 'Property Listing - About' },
            { id: 'summary', title: 'Property Listing - Summary [Page]' },
            { id: 'excerpt', title: 'Property Listing - Excerpt [Card]' },
            { id: 'isFeatured', title: 'Property Listing - Is Featured?' },
            { id: 'address', title: 'Property Listing - Address' },
            { id: 'sqft', title: 'Property Listing - SQFT' },
            { id: 'bathrooms', title: 'Property Listing - Number of Bathrooms' },
            { id: 'bedrooms', title: 'Property Listing - Number of Bedrooms' },
            { id: 'parkingSpots', title: 'Property Listing - Number of Parking Spots' },
            { id: 'displayPrice', title: 'Property Listing - Display Price' },
            { id: 'airConditioner', title: 'Property Listing - Air Conditioner?' },
            { id: 'cableTv', title: 'Property Listing - Cable TV?' },
            { id: 'dishwasher', title: 'Property Listing - Dishwasher?' },
            { id: 'fireExtinguisher', title: 'Property Listing - Fire Extinguisher?' },
            { id: 'elevator', title: 'Property Listing - Elevator?' },
            { id: 'garden', title: 'Property Listing - Garden?' },
            { id: 'internet', title: 'Property Listing - Internet?' },
            { id: 'pool', title: 'Property Listing - Pool?' },
            { id: 'laundry', title: 'Property Listing - Laundry?' },
            { id: 'securityCameras', title: 'Property Listing - Security Cameras?' },
            { id: 'iron', title: 'Property Listing - Iron?' },
            { id: 'gym', title: 'Property Listing - GYM?' },
            { id: 'kitchen', title: 'Property Listing - Kitchen?' },
            { id: 'grill', title: 'Property Listing - Grill?' },
            { id: 'refrigerator', title: 'Property Listing - Refrigerator?' },
            { id: 'heater', title: 'Property Listing - Heater?' },
            { id: 'chimney', title: 'Property Listing - Chimney?' },
            { id: 'sportFields', title: 'Property Listing - Sport Fields?' },
            { id: 'petFriendly', title: 'Property Listing - Pet Friendly?' },
            { id: 'smokingArea', title: 'Property Listing - Smoking Area?' },
            { id: 'microwave', title: 'Property Listing - Microwave?' },
            { id: 'lockpad', title: 'Property Listing - Lockpad?' },
            { id: 'kidsZone', title: 'Property Listing - Kids Zone?' },
            { id: 'garage', title: 'Property Listing - Garage?' },
            { id: 'category', title: 'Property Listing - Category' },
            { id: 'type', title: 'Property Listing - Type' },
            { id: 'location', title: 'Property Listing - Location' },
        ],
    });

    csvWriter.writeRecords(properties)
        .then(() => console.log(`CSV file created: ${outputFile}`))
        .catch(error => console.error(`Error writing CSV file: ${error}`));
};

// Read all JSON files in the input directory and convert them to CSV
fs.readdirSync(inputDir).forEach(file => {
    if (path.extname(file) === '.json') {
        const inputFile = path.join(inputDir, file);
        const outputFileName = file.replace('.json', '.csv');
        const outputFile = path.join(outputDir, outputFileName);
        convertJsonToCsv(inputFile, outputFile);
    }
});
