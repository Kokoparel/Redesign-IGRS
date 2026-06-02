const express = require('express');
const app = express();
const gameRoutes = require('./routes/gameRoutes');
app.use(express.json());
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Halo! Selamat datang di API Game!' });
});

app.use('/game', gameRoutes);

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});