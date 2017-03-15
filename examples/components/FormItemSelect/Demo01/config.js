
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
};

export default {
  layout,
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