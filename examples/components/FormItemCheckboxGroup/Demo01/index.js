import React from 'react';
import { Form, Button, FormItemCheckboxGroup, FormItemNoLabel, FormItemInput } from 'antd-easy';
import formConfig from '../../../formConfig';

const createForm = Form.create;

class FormItemCheckboxGroupDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  getChildContext() {
    return { form: this.props.form };
  }

  getFormData(values){
    const { color, sendEmail, remark } = values;
    return {
      color,
      sendEmail: sendEmail && sendEmail.length?true:false,
      remark
    };
  }

  onSubmit(){
    this.props.form.validateFieldsAndScroll({ force: true }, (errors, values) => {
      if (errors) {return values;}
      const formData = this.getFormData(values);
      /*eslint-disable no-console */
      console.log(formData);
      this.setState({loading: true, formData});
      setTimeout(() => {this.setState({loading: false});}, 2000);
    });
  }

  render(){
    const options = [
      {label: '红色', value: 'red'},
      {label: '绿色', value: 'green'},
      {label: '蓝色', value: 'blue', disabled: true}
    ];
    const sendEmailOptions = [
      {label: '是否发送邮件', value: true}
    ];
    const needRemarkOptions = [
      {label: '是否添加备注', value: true}
    ];
    const { getFieldValue } = this.props.form;
    const needRemark = getFieldValue('needRemark');

    this.props.form.config  = formConfig;

    return <Form horizontal>
      <FormItemCheckboxGroup field='color' options={options} />

      <FormItemNoLabel>
        <FormItemCheckboxGroup field='sendEmail' options={sendEmailOptions} />
      </FormItemNoLabel>

      <FormItemNoLabel>
        <FormItemCheckboxGroup field='needRemark' options={needRemarkOptions} />
      </FormItemNoLabel>
      {needRemark && needRemark.length ? 
        <FormItemNoLabel>
          <FormItemInput field='remark'/>
        </FormItemNoLabel>
      :null}

      <FormItemNoLabel>
        <Button 
        type='primary' 
        loading={this.state.loading} 
        onClick={this.onSubmit.bind(this)}>提交</Button>
      </FormItemNoLabel>
    </Form>;
  }
}

FormItemCheckboxGroupDemo.childContextTypes = {
  form: React.PropTypes.object.isRequired
};

export default createForm()(FormItemCheckboxGroupDemo);

