import React from 'react';
import { Form } from 'antd';

const FormItem = Form.Item;

class FormItemNoLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    
    const { form } = this.context;
    const { formItemLayoutWithOutLabel } = form.config;

    return <FormItem {...formItemLayoutWithOutLabel}>
      {this.props.children}
    </FormItem>;
  }
}

FormItemNoLabel.contextTypes = {
  form: React.PropTypes.object.isRequired
};

export default FormItemNoLabel;

