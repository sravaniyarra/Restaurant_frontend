"use strict";

var express = require('express');

var app = express();
var router = express.Router();

var customers = require('../models/customers');

var mongoose = require('mongoose');

router.get('/', function _callee(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(customers.find());

        case 2:
          data = _context.sent;
          res.json(data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post('/', function _callee2(req, res, next) {
  var reqbody, postdata, usermodelRes;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          reqbody = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            phonenumber: req.body.phonenumber
          };
          console.log('reqbody', reqbody);
          postdata = new customers(reqbody);
          _context2.prev = 3;
          _context2.next = 6;
          return regeneratorRuntime.awrap(postdata.save());

        case 6:
          usermodelRes = _context2.sent;
          res.json({
            status: 'ok',
            data: usermodelRes
          });
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](3);
          console.log("error", _context2.t0);

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[3, 10]]);
});
router.patch('/:id', function _callee3(req, res) {
  var updatedata;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(customers.updateOne({
            _id: req.params.id
          }, {
            $set: {
              username: req.body.username,
              email: req.body.email,
              password: req.body.password,
              phonenumber: req.body.phonenumber
            }
          }));

        case 3:
          updatedata = _context3.sent;
          res.json(updatedata);
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.json({
            message: _context3.t0
          });

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.get('/:id', function _callee4(req, res) {
  var dat;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(customers.findById(req.params.id));

        case 3:
          dat = _context4.sent;
          res.json(dat);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.json({
            message: _context4.t0
          });

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router["delete"]('/:id', function _callee5(req, res) {
  var deletedata;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(customers.remove({
            _id: req.params.id
          }));

        case 3:
          deletedata = _context5.sent;
          res.json(deletedata);
          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.json({
            message: _context5.t0
          });

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = router;