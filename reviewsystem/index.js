import express from 'express';
import session from 'express-session';
import mongoose from "mongoose";
import bodyParser from "bodyparser";
const app = express();
const authRoutes = require('./routes/authRoutes'); 
const employeeRoutes = require('./routes/employeeRoutes'); 
const performanceReviewRoutes = require('./routes/performanceReviewRoutes'); 
const feedbackRoutes = require('./routes/feedbackRoutes'); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.set('view engine', 'ejs');
mongoose.connect('url', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.get('/', (req, res) => {
  res.render('index');
});
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);
app.use('/auth', authRoutes);
app.use('/employees', employeeRoutes);
app.use('/performance-reviews', performanceReviewRoutes);
app.use('/feedback', feedbackRoutes);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

export default app;
