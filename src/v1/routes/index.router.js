const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'api ok'
  });
});

router.get('/api/v1/users', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'Get all users',
    metadata: [
      {
        name: 'John Doe',
        email: 'join@gmai.com'
      },
      {
        name: 'Jane Doe',
        email: 'jane@gmail.com'
      }
    ]
  });
});
module.exports = router;
