const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//<><><><><><><><><><><><><><><><><>

app.get('/hello-world', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.use((req,res) => {
    res.status(404).end();
});

//<><><><><><><><><><><><><><><><><>
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});