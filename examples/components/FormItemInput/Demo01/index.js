import React from 'react';
import { Button, Form, FormItemInput, FormItemNoLabel } from 'antd-easy';
import formConfig from '../../../formConfig';

const createForm = Form.create;

class FormItemInputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  getChildContext() {
    return { form: this.props.form };
  }

  onSubmit(){
    this.props.form.validateFieldsAndScroll({ force: true }, (errors, values) => {
      if (errors) {return values;}
      this.setState({loading: true});
      setTimeout(() => {this.setState({loading: false});}, 2000);
    });
  }

  render(){

    this.props.form.config  = formConfig;
    return <Form horizontal>
      <FormItemInput field='name'/>
      <FormItemNoLabel>
        <Button type='primary' loading={this.state.loading} onClick={this.onSubmit.bind(this)}>提交</Button>
      </FormItemNoLabel>
    </Form>;
  }
}

FormItemInputDemo.childContextTypes = {
  form: React.PropTypes.object.isRequired
};

export default createForm()(FormItemInputDemo);

