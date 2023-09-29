const express = require('express');
const app = express();
const Participant = require('./src/models/participant');
require("./src/db/conn");
const tempelates_path = __dirname + "/templates/views";

app.set("view engine", "hbs");
app.set("views", tempelates_path);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
  res.render("index");
});

app.post('/reg', async (req, res) => {
  try {
    const participant = new Participant(req.body);
    const createParticipant = await participant.save();
    return res.status(201).send(createParticipant);
  } catch (e) {
    return res.status(400).send(e);
  }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}...`);
});