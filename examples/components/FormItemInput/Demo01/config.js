
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
};

export default {
  layout,
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
  }
};