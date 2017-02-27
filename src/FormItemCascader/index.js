import React from 'react';
import { Form, Cascader } from 'antd';

const FormItem = Form.Item;

class FormItemCascader extends React.Component {
  
  render(){
    const { form } = this.context;
    const { field, options, onChange } = this.props;
    const { formItemLayout } = form.config;
    const { formItemAttr, fieldAttr, error } = form.config[field];
    const { getFieldDecorator } = form;
    const fieldProps = getFieldDecorator(field, {
      rules: [{required: formItemAttr.required, message: error.message}]
    });

    const fieldOptions = form.config[field].options;
    const _options = options ? options : fieldOptions;

    const fieldFormItemLayout = form.config[field].formItemLayout;
    const _formItemLayout = fieldFormItemLayout || formItemLayout;

    return <FormItem {..._formItemLayout} {...formItemAttr}>
      {fieldProps(<Cascader {...fieldAttr} options={_options} onChange={onChange} />)}
    </FormItem>;
  }
}

FormItemCascader.contextTypes = {
  form: React.PropTypes.object.isRequired
};

export default FormItemCascader;
