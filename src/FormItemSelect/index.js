import React from 'react';
import { Form, Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class FormItemSelect extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){

    const { form } = this.context;
    const { field, onChange } = this.props;
    const { formItemLayout } = form.config;
    const { formItemAttr, fieldAttr, error } = form.config[field];
    const { getFieldDecorator } = form;
    const fieldProps = getFieldDecorator(field, {
      rules: [{required: formItemAttr.required, message: error.message}]
    });

    // 相关options 必须为对象组成的数组，如 [{text: '北京', value: 'beijing'}];
    const propsOptions = this.props.options;
    const configOptions = form.config[field].options;
    const options = Array.isArray(propsOptions) ? propsOptions : (configOptions||[]);
    
    return <FormItem {...formItemLayout} {...formItemAttr}>
      {fieldProps(<Select {...fieldAttr} onChange={onChange}>
        {options.map((option, k) => {
          return <Option key={k} value={option.value}>{option.text}</Option>;
        })}
      </Select>)}
    </FormItem>;
  }
}

FormItemSelect.contextTypes = {
  form: React.PropTypes.object.isRequired
};

export default FormItemSelect;
