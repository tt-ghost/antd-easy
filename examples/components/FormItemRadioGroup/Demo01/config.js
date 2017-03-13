
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