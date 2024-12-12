require('dotenv').config();
const express = require('express');
const usersRoutes = require('./routes/usersRoutes');
const middlewareLogRequest = require('./middleware/usersMiddleware');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users', usersRoutes);


app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
})