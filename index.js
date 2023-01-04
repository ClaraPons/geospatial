const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const toiletRoutes = require('./routes/toilet')

require("./models/index");

app.use(express.json())
app.use(cors())

app.use('/toilets', toiletRoutes)

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});