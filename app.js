const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const { readdir } = require('fs');

class Website {
    constructor() {
        this.app = express();
        this.config = require('./config.json');
        this.config.callbackURL = this.config.callbackURL = this.config.bot.production
        ? `${this.config.bot.url}/auth/login`
        : `${this.config.bot.url}:${this.config.app.port}/auth/login`;
        this.bot = require('./bot/index');
        this.bot = this.bot(this.config.bot.token);
        try {
            this._setup();
            this._loadRoutes();
            this._start();
        } catch (e) {
            throw e
            throw new Error(e);
        }
    }

    _setup() {
        this.app.set('views', 'views');
        this.app.set('view engine', 'ejs');
        this.app.use(express.static('public'));
        this.app.set('port', this.config.app.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(session({
            secret: `ey.${Date.now()}${this.config.bot.id}${Date.now()}.dashboard.io`,
            resave: false,
            saveUninitialized: false
        }));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Credentials', true);
            req.config = this.config;
            req.bot = this.bot;
            req.user = req.session.user;
            next();
        });
    }

    _loadRoutes() {
        readdir('./routes', (err, files) => {
            if (err) return new Error(err);
            const routes = files.filter((c) => c.split('.').pop() === 'js');
            if (files.length === 0 || routes.length === 0) throw new Error('Aucune route n\'a été trouvée !');
            for (let i = 0; i < routes.length; i++) {
                let route = require(`./routes/${routes[i]}`);
                this.app.use(route.name, new route.Router());
            }
        });
    }

    _start() {
        try {
            this.app.listen(this.app.get('port'));
            console.log(`Application lancée sur le port ::${this.app.get('port')}::`)
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = new Website();
