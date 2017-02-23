'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style2 = require('antd/lib/form/style');

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;

var FormItemNoLabel = function (_React$Component) {
  _inherits(FormItemNoLabel, _React$Component);

  function FormItemNoLabel(props) {
    _classCallCheck(this, FormItemNoLabel);

    return _possibleConstructorReturn(this, (FormItemNoLabel.__proto__ || Object.getPrototypeOf(FormItemNoLabel)).call(this, props));
  }

  _createClass(FormItemNoLabel, [{
    key: 'render',
    value: function render() {
      var form = this.context.form;
      var formItemLayoutWithOutLabel = form.config.formItemLayoutWithOutLabel;


      return _react2.default.createElement(
        FormItem,
        formItemLayoutWithOutLabel,
        this.props.children
      );
    }
  }]);

  return FormItemNoLabel;
}(_react2.default.Component);

FormItemNoLabel.contextTypes = {
  form: _react2.default.PropTypes.object.isRequired
};

exports.default = FormItemNoLabel;