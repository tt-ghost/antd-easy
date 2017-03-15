'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style3 = require('antd/lib/cascader/style');

var _cascader = require('antd/lib/cascader');

var _cascader2 = _interopRequireDefault(_cascader);

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

var FormItemCascader = function (_React$Component) {
  _inherits(FormItemCascader, _React$Component);

  function FormItemCascader() {
    _classCallCheck(this, FormItemCascader);

    return _possibleConstructorReturn(this, (FormItemCascader.__proto__ || Object.getPrototypeOf(FormItemCascader)).apply(this, arguments));
  }

  _createClass(FormItemCascader, [{
    key: 'render',
    value: function render() {
      var form = this.context.form;
      var _props = this.props,
          field = _props.field,
          options = _props.options,
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

      var fieldOptions = form.config[field].options;
      var _options = options ? options : fieldOptions;

      var fieldLayout = form.config[field].layout;
      var _layout = fieldLayout || layout;

      return _react2.default.createElement(
        FormItem,
        _extends({}, _layout, formItemAttr),
        fieldProps(_react2.default.createElement(_cascader2.default, _extends({}, fieldAttr, { options: _options, onChange: onChange })))
      );
    }
  }]);

  return FormItemCascader;
}(_react2.default.Component);

FormItemCascader.contextTypes = {
  form: _react2.default.PropTypes.object.isRequired
};

exports.default = FormItemCascader;