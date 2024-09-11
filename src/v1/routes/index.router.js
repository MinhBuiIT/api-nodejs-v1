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

router.get('/api/v1/products', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'Get all products',
    metadata: [
      {
        name: 'Product 1',
        price: 1000
      },
      {
        name: 'Product 2',
        price: 2000
      }
    ]
  });
});
module.exports = router;
