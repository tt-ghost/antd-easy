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
    const { field, onChange, render } = this.props;
    const { layout } = form.config;
    const { formItemAttr={}, fieldAttr={}, error={}, keyField, valueField } = form.config[field];
    const { getFieldDecorator } = form;
    const fieldProps = getFieldDecorator(field, {
      rules: [{required: formItemAttr.required, message: error.message}]
    });

    const fieldLayout = form.config[field].layout;
    const _layout = fieldLayout || layout;
    // 相关options 必须为对象组成的数组，如 [{label: '北京', value: 'beijing'}];
    const propsOptions = this.props.options;
    const configOptions = form.config[field].options||[];
    const options = Array.isArray(propsOptions) ? propsOptions : configOptions;
    
    return <FormItem {..._layout} {...formItemAttr}>
      {fieldProps(<Select {...fieldAttr} onChange={onChange}>
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

FormItemSelect.contextTypes = {
  form: React.PropTypes.object.isRequired
};

export default FormItemSelect;
