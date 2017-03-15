
import { util } from 'antd-easy';
import { URL } from '../../../constants';
import Fetch from '../../../fetch';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
};

export default {
  layout,
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
      filterOption: util.filterOptionByChildren,
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
    // layout: {},
    error: {
      message: '请输入用户'
    }
  }
};