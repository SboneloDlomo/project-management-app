const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let projects = [];

app.post('/api/projects', (req, res) => {
    const project = req.body;
    projects.push(project);
    res.status(201).json(project);
});

app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
