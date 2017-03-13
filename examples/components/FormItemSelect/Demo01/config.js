
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
  }
};