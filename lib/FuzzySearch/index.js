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
var timer = void 0;

var FuzzySearch = function (_React$Component) {
  _inherits(FuzzySearch, _React$Component);

  function FuzzySearch(props) {
    _classCallCheck(this, FuzzySearch);

    var _this = _possibleConstructorReturn(this, (FuzzySearch.__proto__ || Object.getPrototypeOf(FuzzySearch)).call(this, props));

    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(FuzzySearch, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      var field = this.props.field;
      var getFieldValue = this.context.form.getFieldValue;

      var value = getFieldValue(field);

      this.onChange(value);
    }
  }, {
    key: 'onFuzzySearch',
    value: function onFuzzySearch(keyword) {
      var _this2 = this;

      var form = this.context.form;
      var field = this.props.field;
      var fuzzySearch = form.config[field].fuzzySearch;


      if (typeof fuzzySearch === 'function') {
        fuzzySearch(keyword, function (res) {
          _this2.setState({ options: res });
        });
      }
    }
  }, {
    key: 'onSearch',
    value: function onSearch(keyword) {
      var _this3 = this;

      if (keyword) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        timer = setTimeout(function () {
          _this3.onFuzzySearch(keyword.toLowerCase());
        }, 100);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(value) {
      var _this4 = this;

      if (value) {
        var form = this.context.form;
        var field = this.props.field;
        var accurateSearch = form.config[field].accurateSearch;


        accurateSearch(value, function (res) {
          _this4.setState({ options: [res] });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var form = this.context.form;
      var _props = this.props,
          field = _props.field,
          render = _props.render;
      var formItemLayout = form.config.formItemLayout;
      var _form$config$field = form.config[field],
          formItemAttr = _form$config$field.formItemAttr,
          fieldAttr = _form$config$field.fieldAttr,
          error = _form$config$field.error,
          optionKey = _form$config$field.optionKey;
      var getFieldDecorator = form.getFieldDecorator;

      var fieldProps = getFieldDecorator(field, {
        rules: [{ required: formItemAttr.required, message: error.message }]
      });
      var fieldFormItemLayout = form.config[field].formItemLayout;
      var _formItemLayout = fieldFormItemLayout || formItemLayout;
      var _state$options = this.state.options,
          options = _state$options === undefined ? [] : _state$options;


      return _react2.default.createElement(
        FormItem,
        _extends({}, _formItemLayout, formItemAttr),
        fieldProps(_react2.default.createElement(
          _select2.default,
          _extends({}, fieldAttr, { onSearch: this.onSearch.bind(this), onChange: this.onChange.bind(this) }),
          options.map(function (item, k) {
            var valueStr = (item[optionKey] + '').toLowerCase();
            return _react2.default.createElement(
              Option,
              { key: valueStr, value: valueStr },
              typeof render === 'function' ? render(item, k) : valueStr
            );
          })
        ))
      );
    }
  }]);

  return FuzzySearch;
}(_react2.default.Component);

FuzzySearch.contextTypes = {
  form: _react2.default.PropTypes.object.isRequired
};

exports.default = FuzzySearch;