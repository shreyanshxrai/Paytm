const express = require("express");
const app = express();
const port = 3000;
const rootRouter = require("./routes/server")
const cors = require ("cors");
app.use(cors());
app.use(express.json());
app.use("/api/v1", rootRouter);


app.listen(port , (err)=>{
    if(err) console.log(err);
    console.log("Server is running on port", port);
})
