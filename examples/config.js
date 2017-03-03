
import { filterOptionByChildren } from '../lib/util';
import { URL } from './constants';
import Fetch from './fetch';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
};
const formItemLayoutColumn = {
  wrapperCol: { span: 24 }
};
const formItemLayoutWithOutLabel = {
  wrapperCol: { span: 16, offset: 4 }
};

export default {
  formItemLayout,
  formItemLayoutWithOutLabel,
  name: {
    type: 'Input',
    formItemAttr: {
      label: '姓名',
      required: true
    },
    fieldAttr: {
      placeholder: '请填写姓名',
      type: 'text'
    },
    error: {
      message: '请输入正确的姓名'
    }
  },
  location: {
    type: 'Select',
    formItemAttr: {
      label: '地区',
      required: true
    },
    fieldAttr: {
      placeholder: '请选择地区'
    },
    keyField: 'value',
    valueField: 'label',
    error: {
      message: '请选择地区'
    }
  },
  user: {
    type: 'FuzzySearch',
    formItemAttr: {
      label: '用户',
      required: true
    },
    fieldAttr: {
      showSearch: true,
      placeholder: '请输入用户邮箱前缀',
      notFoundContent: '',
      defaultActiveFirstOption: false,
      showArrow: false,
      filterOption: filterOptionByChildren,
      size: 'large',
      style: {width: '100%'}
    },
    keyField: 'name',
    fuzzySearch: (keyword, callback) => {
      Fetch(URL.search_user + '?keyword=' + keyword)
      .then(res => res.json())
      .then(res => {
        callback(res);
      });
    },
    accurateSearch: (value, callback) => {
      Fetch(URL.search_user_by_prefix.replace('{prefix}', value))
      .then(res => res.json())
      .then(res => {
        callback(res);
      });
    },
    // formItemLayout: {},
    error: {
      message: '请输入用户'
    }
  },
  sex: {
    type: 'RadioGroup',
    formItemAttr: {
      label: '性别',
      required: true
    },
    fieldAttr: {
    },
    error: {
      message: '请选择性别'
    }
  },
  color: {
    type: 'CheckboxGroup',
    formItemAttr: {
      label: '颜色',
      required: true
    },
    fieldAttr: {
      
    },
    error: {
      message: '请选择颜色'
    }
  },
  sendEmail: {
    type: 'Checkbox',
    formItemAttr: {
      // label: '颜色',
      required: false
    },
    fieldAttr: {
    },
    error: {
      message: '请选择颜色'
    }
  },
  needRemark: {
    type: 'Checkbox',
    formItemAttr: {
      // label: '颜色',
      required: false
    },
    fieldAttr: {
    },
    error: {
      message: '请选择'
    }
  },
  remark:{
    type: 'Input',
    formItemAttr: {
      // label: '备注',
      required: true
    },
    fieldAttr: {
      placeholder: '请填写备注',
      type: 'textarea'
    },
    formItemLayout:formItemLayoutColumn,
    error: {
      message: '请输入正确的备注'
    }
  },
  local: {
    type: 'Cascader',
    formItemAttr: {
      label: '地区',
      required: true
    },
    fieldAttr: {
      placeholder: '请选择地区',
      allowClear: false,
      showSearch: true,
      size: 'large',
      style: {width: '100%'},
      notFoundContent: '没有找到'
    },
    error: {
      message: '请选择正确的地区'
    }
  }
};