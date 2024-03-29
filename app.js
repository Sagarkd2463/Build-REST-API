import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello from the HomePage');
});

app.listen(PORT, () => {
    console.log(`Server listening on port: http://localhost:${PORT}`);
});



