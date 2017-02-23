'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style3 = require('antd/lib/select/style');

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

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
var Option = _select2.default.Option;

var FormItemSelect = function (_React$Component) {
  _inherits(FormItemSelect, _React$Component);

  function FormItemSelect(props) {
    _classCallCheck(this, FormItemSelect);

    return _possibleConstructorReturn(this, (FormItemSelect.__proto__ || Object.getPrototypeOf(FormItemSelect)).call(this, props));
  }

  _createClass(FormItemSelect, [{
    key: 'render',
    value: function render() {
      var form = this.context.form;
      var _props = this.props,
          field = _props.field,
          onChange = _props.onChange;
      var formItemLayout = form.config.formItemLayout;
      var _form$config$field = form.config[field],
          formItemAttr = _form$config$field.formItemAttr,
          fieldAttr = _form$config$field.fieldAttr,
          error = _form$config$field.error;
      var getFieldDecorator = form.getFieldDecorator;

      var fieldProps = getFieldDecorator(field, {
        rules: [{ required: formItemAttr.required, message: error.message }]
      });

      // 相关options 必须为对象组成的数组，如 [{text: '北京', value: 'beijing'}];
      var propsOptions = this.props.options;
      var configOptions = form.config[field].options;
      var options = Array.isArray(propsOptions) ? propsOptions : configOptions || [];

      return _react2.default.createElement(
        FormItem,
        _extends({}, formItemLayout, formItemAttr),
        fieldProps(_react2.default.createElement(
          _select2.default,
          _extends({}, fieldAttr, { onChange: onChange }),
          options.map(function (option, k) {
            return _react2.default.createElement(
              Option,
              { key: k, value: option.value },
              option.text
            );
          })
        ))
      );
    }
  }]);

  return FormItemSelect;
}(_react2.default.Component);

FormItemSelect.contextTypes = {
  form: _react2.default.PropTypes.object.isRequired
};

exports.default = FormItemSelect;