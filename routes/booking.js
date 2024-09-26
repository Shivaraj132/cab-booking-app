const express = require('express');
const router = express.Router();

let bookings = [];

router.post('/', (req, res) => {
    const { name, pickup, dropoff, time } = req.body;
    if (name && pickup && dropoff && time) {
        const booking = { id: bookings.length + 1, name, pickup, dropoff, time };
        bookings.push(booking);
        res.status(201).json(booking);
    } else {
        res.status(400).json({ message: 'Invalid booking details' });
    }
});

router.get('/', (req, res) => {
    res.status(200).json(bookings);
});

module.exports = router;

