
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
};

const formItemLayoutWithOutLabel = {
  wrapperCol: { span: 16, offset: 4 }
};

export default {
  formItemLayout,
  formItemLayoutWithOutLabel,
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