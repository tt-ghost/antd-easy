
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
  }
};