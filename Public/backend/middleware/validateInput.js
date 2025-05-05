exports.validateSignup = (req, res, next) => {
    const { name, email, password, address, role } = req.body;
    if (!name || !email || !password || !address || !role) {
      return res.status(400).json({ error: 'Missing fields' });
    }
    next();
  };
  
  exports.validateRating = (req, res, next) => {
    const { rating, store_id } = req.body;
    if (!rating || !store_id) return res.status(400).json({ error: 'Rating and store_id required' });
    next();
  };
  