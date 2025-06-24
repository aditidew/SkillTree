const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const skillRoutes = require('./routes/skillRoutes');
app.use('/api/skills', skillRoutes);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Connect to DB only if not in test mode
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(process.env.PORT || 5000, () =>
      console.log('✅ Server is running...')
    );
  })
  .catch(err => console.error('❌ MongoDB connection failed:', err));
}

module.exports = app;
