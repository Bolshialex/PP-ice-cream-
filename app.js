import express from "express";
import colors from "colors";

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const PORT = 3000;

const orders = [];

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/thankyou", (req, res) => {
  console.log(req.body);
  const order = {
    name: req.body.name,
    email: req.body.email,
    flavors: req.body.flavors,
    cone: req.body.cone,
    toppings: req.body.toppings,
    comment: req.body.comment,
  };

  orders.push(order);
  res.render("confirm", { order });
});

app.get("/admin", (req, res) => {
  res.render("admin", { orders });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`.bgYellow);
});
