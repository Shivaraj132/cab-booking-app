const express = require('express');
const path = require('path');
const app = express();
const bookingRouter = require('./routes/booking');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/api/booking', bookingRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

