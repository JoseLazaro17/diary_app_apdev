const dotenv = require(`dotenv`);
const express = require(`express`);
const session = require(`express-session`);
const hbs = require(`hbs`);
//const routes = require(`./routes/routes.js`);
const db = require(`./models/db.js`);

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//app.set(`view engine`, `hbs`);
//hbs.registerPartials(__dirname + `/views/partials`);

dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;
secret = process.env.SECRET;

app.set('models', __dirname + 'models/');
app.use(express.static('public')); //Load the static files
app.use(express.static(__dirname + '/'));

app.use(session({ secret: secret, saveUninitialized: false, resave: true }));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

const router = require('./router/DiaryRouter');
app.use('/', router);
db.connect();

app.listen(port, hostname, function () {
	console.log(`Server is running at:`);
	console.log(`http://` + hostname + `:` + port);
});
