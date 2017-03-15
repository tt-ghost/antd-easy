
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
};

export default {
  layout,
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
    error: {
      message: '请输入正确的备注'
    }
  }
};