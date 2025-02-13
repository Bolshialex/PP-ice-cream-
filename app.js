import express from "express";
import colors from "colors";

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const PORT = 3000;


app.get('/', (req, res) => {

  res.render('home');
});


app.post('/thankyou', (req, res) => {
  console.log(req.body)
  res.render('confirm');
});



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`.bgYellow);
});



