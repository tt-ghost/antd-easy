
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
};

export default {
  layout,
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
  }
};