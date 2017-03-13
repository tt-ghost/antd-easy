
# antd-easy

> 基于ant-design封装的业务组件，涉及表单校验、错误提示等复杂交互。技术底层为React.js

## 作为第三方库使用

### 基于 `antd@2.7.*` 版本

### 安装

```shell
npm i antd-easy --save
```

### 通过 `import` 方式引入

```javascript
import FormItemInput from 'antd-easy/lib/FormItemInput';
import FormItemSelect from 'antd-easy/lib/FormItemSelect';
...
```

或者

```javascript
import { Input, Select, FormItemInput, FormItemSelect } from 'antd-easy';
...
```

## 本地查看demo演示

### 准备，clone 并安装依赖

```
git clone git@github.com:tt-ghost/antd-easy.git
cd antd-easy
npm i
```

### 启动

#### 启动服务端，用于返回示例文件源码，默认启动 *3100* 端口

```npm
npm run server
```

#### 执行以下代码运行前端代码，成功后访问 [http://localhost:9100](http://localhost:9100)

```npm
npm start
```

