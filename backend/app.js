const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post('/post', (req, res) => {
    /*some interaction with database will be here*/
    let responseObject = {
        status: "Success",
        incomingRequestBody: req.body,
        databaseResponse: "Comming soon"
    }
    res.send(JSON.stringify(responseObject));
    
});

app.get("/get", (req, res)=>{
	res.write("get me");
	res.send();
})
app.listen(3000, () => console.log(`Started server at http://localhost:3000`));
