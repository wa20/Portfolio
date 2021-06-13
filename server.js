const express = require("express");
const exphbs = require("express-handlebars");

// const helpers=require("./utils/helpers")
const routes = require("./controllers/index");
const sequelize = require("./config/connections");
const hbs = exphbs.create({});


const app = express();
const PORT = process.env.PORT || 3001;


app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}.`));
});