'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multireducerBind = exports.connectMultireducer = undefined;

var _multireducer = require('./multireducer');

var _multireducer2 = _interopRequireDefault(_multireducer);

var _connectMultireducer = require('./connectMultireducer');

var _connectMultireducer2 = _interopRequireDefault(_connectMultireducer);

var _multireducerBind = require('./multireducerBind');

var _multireducerBind2 = _interopRequireDefault(_multireducerBind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.connectMultireducer = _connectMultireducer2.default;
exports.multireducerBind = _multireducerBind2.default;
exports.default = _multireducer2.default;