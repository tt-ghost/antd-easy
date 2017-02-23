
### formConfig配置

```javascript
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 }
};
const formItemLayoutWithOutLabel = {
  wrapperCol: { span: 12, offset: 4 }
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
    error: {
      message: '请选择地区'
    }
  }
};
```

### FormItemSelect 下拉框

