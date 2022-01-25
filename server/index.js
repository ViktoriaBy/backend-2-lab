const express = require('express');
const cors = require('cors');
const app = express();
const {getAllHouses, createHouse, deleteHouse, updateHouse} = require('./controller');

const port = 4004

//middleware    
app.use(cors());
app.use(express.json())


//ENDPOINTS
app.get('/api/houses', getAllHouses)
app.post('/api/houses', createHouse)
app.delete('/api/houses/:id', deleteHouse)
app.put('/api/houses/:id', updateHouse)



app.listen(port, () => console.log(`Server is running on port 4004`))