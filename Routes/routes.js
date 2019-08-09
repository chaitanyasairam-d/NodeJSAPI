const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 4201;
const user = require('../Main/app');


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use('/api', router);

app.get('/',(req,res)=>res.send("Working"));
router.get('/users', user.getUser)

router.post('/users', user.createUser)

router.put('/users', user.updateUser)

router.delete('/users', user.delUser)


app.listen(PORT, () => console.log(`Server Listening on PORT ${PORT}`));
