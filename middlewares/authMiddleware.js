const authMiddleware = (req, res, next) => {
    // For now, let's just proceed without actual auth
    console.log('Auth middleware ran');
    next();
};

module.exports = authMiddleware;
