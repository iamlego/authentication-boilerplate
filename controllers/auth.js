const bcrypt = require('bcryptjs');
const User = require('../models/User');
const passport = require('passport');

module.exports = {
    registerView: (req, res) => {
      res.render('register');
    },
  
    loginView: (req, res) => {
      res.render('login');
    },
  
    registerUser: async (req, res) => {
        const { name, email, password } = req.body;
        if(!name || !email || !password) {
          return res.render('register', { error: 'Please fill all fields' });
        }
      
        if(await User.findOne({where: {email}})) {
          return res.render('register', { error: 'A user account already exists with this email' });
        }
      
        await User.create({name, email, password: bcrypt.hashSync(password, 8)});
      
        res.redirect('login?registrationdone');
      },

    loginUser: (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                return next(err); // Handle any unexpected errors
            }
    
            if (!user) {
                return res.render('login', { error: 'Invalid email or password. Please try again.' });
            }
    
            // Log the user in if authentication is successful
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }
                return res.redirect('/?loginsuccess'); // Redirect to success page
            });
        })(req, res, next);
    },
    
    // loginUser: (req, res) => {
    //     passport.authenticate('local', {
    //       successRedirect: '/?loginsuccess',
    //       failureRedirect: '/login?error'
    //     })(req, res);
    //  },
  
    logoutUser: (req, res) => {
        req.logout(() => res.redirect('/login?loggedout'));
      }
  }