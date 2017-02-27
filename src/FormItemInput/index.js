import React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

class FormItemInput extends React.Component {
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

    const fieldFormItemLayout = form.config[field].formItemLayout;
    const _formItemLayout = fieldFormItemLayout || formItemLayout;

    return <FormItem {..._formItemLayout} {...formItemAttr}>
      {fieldProps(<Input {...fieldAttr} onChange={onChange} />)}
    </FormItem>;
  }
}

FormItemInput.contextTypes = {
  form: React.PropTypes.object.isRequired
};

export default FormItemInput;
