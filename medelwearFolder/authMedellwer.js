
function authMedellwer (req ,res , next) {
    if (!req.session.user) {
    next();
    return res.status(401).json({ message: 'Unauthorized' });
  } else {
    res.json({ message: 'Profile accessed', user: req.session.user });
  }
}
module.exports = authMedellwer