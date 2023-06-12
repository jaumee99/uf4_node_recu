const express = require("express"); 
const v1VolRouter = require("./v1.3/routes/volRouter");
const v1BitlletRouter = require("./v1.3/routes/bitlletRouter");

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(express.json());

app.use("/v1.3/vol", v1VolRouter);
app.use("/v1.3/bitllet", v1BitlletRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
}); 