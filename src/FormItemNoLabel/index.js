import React from 'react';
import { Form } from 'antd';

const FormItem = Form.Item;

class FormItemNoLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    
    const { form } = this.context;
    const { layout } = form.config;

    return <FormItem label=' ' colon={false} {...layout}>
      {this.props.children}
    </FormItem>;
  }
}

FormItemNoLabel.contextTypes = {
  form: React.PropTypes.object.isRequired
};

export default FormItemNoLabel;

