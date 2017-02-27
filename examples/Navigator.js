import React from 'react';
import Menu from 'antd/lib/menu';

const MenuItem = Menu.Item;

class Navigator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current: 'FormItemInput'
    };
  }
  componentWillReceiveProps(nextProps) {
    if(!this.getCurrentPath(nextProps)){
      this.setState({current: ''});
    }
  }

  componentDidMount() {
    this.setState({current: this.getCurrentPath(this.props)});
  }

  getCurrentPath(props){
    const pathname = props.location.pathname.split('/');
    pathname.shift();
    return pathname[0];
  }

  onMenuClick(e){
    this.context.router.push(`/${e.key}`);
    this.setState({current: e.key});
  }

  render(){
    return <Menu onClick={this.onMenuClick.bind(this)} selectedKeys={[this.state.current]} mode="inline">
      <MenuItem key='FormItemInput'>FormItemInput 输入框</MenuItem>
      <MenuItem key='FormItemSelect'>FormItemSelect 下拉框</MenuItem>
      <MenuItem key='FuzzySearch'>FuzzySearch 模糊搜索</MenuItem>
      <MenuItem key='FormItemRadioGroup'>FormItemRadioGroup 单选</MenuItem>
      <MenuItem key='FormItemCheckboxGroup'>FormItemCheckboxGroup 复选</MenuItem>
  </Menu>;
  }
}

Navigator.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Navigator;
