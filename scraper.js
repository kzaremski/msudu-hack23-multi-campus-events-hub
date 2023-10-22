/*
    MSU-DU Hack 2023
*/

// Import dependencies


// Individual scrapers
const msudenver_scraper = require("./scrapers/msudenver.edu");
const du_scraper = require("./scrapers/du.edu");

// Mongoose models


/**
 * Scrape all institution websites and 
 */
async function scrapeAllAndUpdate() {
    console.log(` * * * SCRAPING STARTED ${new Date().toUTCString()} * * * `);

    // List of scraper functions
    const scrapers = [
        msudenver_scraper,
        du_scraper,
    ]

    // Get all events from all scrapers
    let events = []
    for (const scraper of scrapers) {
        const results = await scraper();
        events = events.concat(results);
    }

    console.log(` * * * SCRAPING COMPLETED ${new Date().toUTCString()} * * * `);
}

// Export
module.exports = { scrapeAllAndUpdate };
