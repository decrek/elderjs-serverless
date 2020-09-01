require('dotenv').config();
const jwt = require('jsonwebtoken');

const getExpiryDate = () => {
  return Math.floor(Date.now() / 1000) + 60 * 60;
};

module.exports = function generateJWT(data, expiry) {
  const exp = expiry || getExpiryDate();
  return jwt.sign(
    {
      exp,
      data,
      app_metadata: {
        authorization: {
          roles: ['editor', 'admin'],
        },
      },
    },
    process.env.JWT_SECRET,
  );
};
