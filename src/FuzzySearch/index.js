import React from 'react';
import { Form, Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
let timer;

class FuzzySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }

  componentWillReceiveProps() {
    const { field } = this.props;
    const { getFieldValue } = this.context.form;
    const value = getFieldValue(field);

    this.onChange(value);
  }

  onFuzzySearch(keyword){
    const { form } = this.context;
    const { field } = this.props;
    const { fuzzySearch } = form.config[field];

    if(typeof fuzzySearch === 'function'){
      fuzzySearch(keyword, res => {
        this.setState({options: res});
      });
    }
  }

  onSearch(keyword){
    if(keyword){
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => {
        this.onFuzzySearch(keyword.toLowerCase());
      }, 100);
    }
  }

  onChange(value){

    if(value){
      const { form } = this.context;
      const { field } = this.props;
      const { accurateSearch } = form.config[field];

      accurateSearch(value, res => {
        this.setState({options: [res]});
      });
    }
  }

  render(){

    const { form } = this.context;
    const { field, render } = this.props;
    const { formItemLayout } = form.config;
    const { formItemAttr, fieldAttr, error, keyField, valueField } = form.config[field];
    const { getFieldDecorator } = form;
    const fieldProps = getFieldDecorator(field, {
      rules: [{required: formItemAttr.required, message: error.message}]
    });
    const fieldFormItemLayout = form.config[field].formItemLayout;
    const _formItemLayout = fieldFormItemLayout || formItemLayout;
    const { options = [] } = this.state;
    
    return <FormItem {..._formItemLayout} {...formItemAttr}>
      {fieldProps(<Select {...fieldAttr} onSearch={this.onSearch.bind(this)} onChange={this.onChange.bind(this)}>
        {options.map((item, k) => {
          const value = item[keyField] !== undefined ? item[keyField]+'' : item;
          const text = item[valueField] !== undefined ? item[valueField] : item;
          const option = typeof render === 'function' ? render(item, k) : text;

          return <Option key={k} value={value}>{option}</Option>;
        })}
      </Select>)}
    </FormItem>;
  }
}

FuzzySearch.contextTypes = {
  form: React.PropTypes.object.isRequired
};

export default FuzzySearch;
