import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as expressLayouts from 'express-ejs-layouts';
import * as methodOverride from 'method-override';
import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';
import * as flash from 'express-flash';
import * as expressSession from 'express-session';
import AWSConfig from './configs/dynamoDb';
import Route from './routes';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        AWSConfig();
        new Route(this.app);
    }

    private use(): void {
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(expressLayouts);
        this.app.use(methodOverride('_method'));
        this.app.use(expressLayouts);
        this.app.use(flash());
        this.app.use(expressSession({
            secret: 'authentication',
            cookie: { maxAge: 60000 },
            resave: false,
            saveUninitialized: true
        }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }

    private set(): void {
        this.app.set('view engine', 'ejs');
        this.app.set('views', './views');
        this.app.set('layout extractScripts', true);
        this.app.set('layout extractStyles', true);
    }

    // private passport() {
    //     passport.serializeUser(function(user, done) {
    //         done(null, user._id);
    //     });
        
    //     passport.deserializeUser(function(id, done) {
    //         UserModel.findById(id, function(err, user) {
    //             done(err, user);
    //         });
    //     });
    //     passport.use(new LocalStrategy.Strategy({
    //             usernameField: 'email',
    //             passwordField: 'password'
    //         },
    //         async function (username, password, done) {
    //             let user = await UserModel.findOne({ email : username });
    //             if (! user) {
    //                 return done(null, false, { message: 'Incorrect username.' });
    //             }
    //             if (! user.checkPassword(password)) {
    //                 return done(null, false, { message: 'Incorrect password.' });
    //             }

    //             return done(null, user);
    //         }
    //     ));
    // }
}

export default new App().app;
