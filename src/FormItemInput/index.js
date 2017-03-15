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
    const { layout } = form.config;
    const { formItemAttr, fieldAttr, error } = form.config[field];
    const { getFieldDecorator } = form;
    const fieldProps = getFieldDecorator(field, {
      rules: [{required: formItemAttr.required, message: error.message}]
    });

    const fieldLayout = form.config[field].layout;
    const _layout = fieldLayout || layout;

    return <FormItem {..._layout} {...formItemAttr}>
      {fieldProps(<Input {...fieldAttr} onChange={onChange} />)}
    </FormItem>;
  }
}

FormItemInput.contextTypes = {
  form: React.PropTypes.object.isRequired
};

export default FormItemInput;
