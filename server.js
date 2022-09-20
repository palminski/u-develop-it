const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes'); //defaults to index.js


const PORT = process.env.PORT || 3001;
const app = express();

//Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Use Api Routes
app.use('/api', apiRoutes);

//default response if other requests not found
app.use((req,res) => {
    res.status(404).end();
});

//<><><><><><><><><><><><><><><><><>
db.connect(err => {
    if (err) throw err;
    console.log('Database Connected!');
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
});

