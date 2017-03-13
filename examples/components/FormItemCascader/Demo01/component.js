import React from 'react';
import { Form, Button, FormItemCascader, FormItemNoLabel } from 'antd-easy';
import config from './config';

const createForm = Form.create;

class FormItemCascaderDemo extends React.Component {
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
      /*eslint-disable no-console */
      console.log(values);
      this.setState({loading: true, values});
      setTimeout(() => {this.setState({loading: false});}, 2000);
    });
  }

  render(){
    const options = [
      {label: '北京', value: 'beijing', children: [
        { label: '朝阳区', value: 'chaoyang'},
        { label: '海淀区', value: 'haidian', children: [
          {label: '西二旗', value: 'xierqi'},
          {label: '中关村', value: 'zhognguancun'},
          {label: '西单', value: 'xidan'}
        ]},
        { label: '西城区', value: 'xicheng'},
        { label: '昌平区', value: 'changping'}
      ]},
      {label: '安徽', value: 'anhui'},
      {label: '上海', value: 'shanghai'}
    ];

    this.props.form.config  = config;

    return <Form horizontal>
      <FormItemCascader field='local' options={options} />

      <FormItemNoLabel>
        <Button 
        type='primary' 
        loading={this.state.loading} 
        onClick={this.onSubmit.bind(this)}>提交</Button>
      </FormItemNoLabel>
    </Form>;
  }
}

FormItemCascaderDemo.childContextTypes = {
  form: React.PropTypes.object.isRequired
};

export default createForm()(FormItemCascaderDemo);

