'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FuzzySearch = exports.RadioGroup = exports.CheckboxGroup = exports.Cascader = exports.Select = exports.Input = undefined;

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = exports.Input = {
  type: 'Input',
  formItemAttr: {
    label: ' ',
    required: false
  },
  fieldAttr: {
    placeholder: '请填写',
    type: 'text'
  },
  error: {
    message: '请输入'
  }
};

var Select = exports.Select = {
  type: 'Select',
  formItemAttr: {
    label: ' ',
    required: false
  },
  fieldAttr: {
    placeholder: '请选择'
  },
  keyField: 'value',
  valueField: 'label',
  error: {
    message: '请选择'
  }
};

var Cascader = exports.Cascader = {
  type: 'Cascader',
  formItemAttr: {
    label: ' ',
    required: false
  },
  fieldAttr: {
    placeholder: '请选择',
    allowClear: false,
    showSearch: true,
    size: 'large',
    style: { width: '100%' },
    notFoundContent: '没有找到'
  },
  error: {
    message: '请选择'
  }
};

var CheckboxGroup = exports.CheckboxGroup = {
  type: 'CheckboxGroup',
  formItemAttr: {
    label: ' ',
    required: false
  },
  fieldAttr: {},
  error: {
    message: '请选择'
  }
};

var RadioGroup = exports.RadioGroup = {
  type: 'RadioGroup',
  formItemAttr: {
    label: ' ',
    required: false
  },
  fieldAttr: {},
  error: {
    message: '请选择'
  }
};

var FuzzySearch = exports.FuzzySearch = {
  type: 'FuzzySearch',
  formItemAttr: {
    label: ' ',
    required: false
  },
  fieldAttr: {
    showSearch: true,
    placeholder: '请输入关键字',
    notFoundContent: '',
    defaultActiveFirstOption: false,
    showArrow: false,
    filterOption: _util2.default.filterOptionByChildren,
    size: 'large',
    style: { width: '100%' }
  },
  keyField: 'name',
  fuzzySearch: function fuzzySearch(keyword, callback) {
    _util2.default.fetch('/').then(function (res) {
      return res.json();
    }).then(function (res) {
      callback(res);
    });
  },
  accurateSearch: function accurateSearch(value, callback) {
    _util2.default.fetch('/').then(function (res) {
      return res.json();
    }).then(function (res) {
      callback(res);
    });
  },
  // formItemLayout: {},
  error: {
    message: '请输入用户'
  }
};