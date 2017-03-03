import util from './util';

export const Input = {
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

export const Select = {
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

export const Cascader = {
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
    style: {width: '100%'},
    notFoundContent: '没有找到'
  },
  error: {
    message: '请选择'
  }
};

export const CheckboxGroup = {
  type: 'CheckboxGroup',
  formItemAttr: {
    label: ' ',
    required: false
  },
  fieldAttr: {
    
  },
  error: {
    message: '请选择'
  }
};

export const RadioGroup = {
  type: 'RadioGroup',
  formItemAttr: {
    label: ' ',
    required: false
  },
  fieldAttr: {
  },
  error: {
    message: '请选择'
  }
};

export const FuzzySearch = {
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
    filterOption: util.filterOptionByChildren,
    size: 'large',
    style: {width: '100%'}
  },
  keyField: 'name',
  fuzzySearch: (keyword, callback) => {
    util.fetch('/')
    .then(res => res.json())
    .then(res => {
      callback(res);
    });
  },
  accurateSearch: (value, callback) => {
    util.fetch('/')
    .then(res => res.json())
    .then(res => {
      callback(res);
    });
  },
  // formItemLayout: {},
  error: {
    message: '请输入用户'
  }
};
