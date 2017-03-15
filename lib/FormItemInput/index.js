'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style3 = require('antd/lib/input/style');

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _style4 = require('antd/lib/form/style');

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;

var FormItemInput = function (_React$Component) {
  _inherits(FormItemInput, _React$Component);

  function FormItemInput(props) {
    _classCallCheck(this, FormItemInput);

    return _possibleConstructorReturn(this, (FormItemInput.__proto__ || Object.getPrototypeOf(FormItemInput)).call(this, props));
  }

  _createClass(FormItemInput, [{
    key: 'render',
    value: function render() {
      var form = this.context.form;
      var _props = this.props,
          field = _props.field,
          onChange = _props.onChange;
      var layout = form.config.layout;
      var _form$config$field = form.config[field],
          formItemAttr = _form$config$field.formItemAttr,
          fieldAttr = _form$config$field.fieldAttr,
          error = _form$config$field.error;
      var getFieldDecorator = form.getFieldDecorator;

      var fieldProps = getFieldDecorator(field, {
        rules: [{ required: formItemAttr.required, message: error.message }]
      });

      var fieldLayout = form.config[field].layout;
      var _layout = fieldLayout || layout;

      return _react2.default.createElement(
        FormItem,
        _extends({}, _layout, formItemAttr),
        fieldProps(_react2.default.createElement(_input2.default, _extends({}, fieldAttr, { onChange: onChange })))
      );
    }
  }]);

  return FormItemInput;
}(_react2.default.Component);

FormItemInput.contextTypes = {
  form: _react2.default.PropTypes.object.isRequired
};

exports.default = FormItemInput;