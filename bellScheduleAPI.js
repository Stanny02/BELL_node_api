// Install Express first by running: npm install express

const express = require('express');
const app = express();
const port = 3000;

// Define your JSON data
const data = {
    exceptionalHolidays: ["2024-04-11"],
    saturdayBellTimes: ["08:15", "08:30", "09:00", "10:30", "10:45", "11:45", "12:45", "13:00"],
    testDates: ["2025-04-25"],
    testDayTimings: ["13:15"],
    weekdayBellTimes: ["14:01", "15:20", "15:45", "16:42", "17:40", "18:00", "10:30", null, "11:00", "12:00", "13:00", "13:15", "05:50"]
};

// Create a simple endpoint to serve the JSON
app.get('/bell_schedule', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
