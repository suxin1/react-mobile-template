import { createContext, useContext } from 'react';
import { configure } from 'mobx';
import userStore from './UserStore';
import timerStore from './TestStore';

// 收集 page 文件夹下所有名字为 module.js 的文件。
// store 的命名：./<pathname>/module.js => '<pathname>Store';
// 列：./home/module.js => 'homeStore'
const moduleFiles = require.context('page', true, /module\.js/);
const moduleNames = (path) => {
  const pathList = path.split('/');
  return `${pathList[pathList.length - 2]}Store`;
};
const modules = moduleFiles.keys().reduce((modules, modulePath) => {
  const value = moduleFiles(modulePath);
  const name = moduleNames(modulePath);
  if (!name) {
    throw new Error('域名 (namespace) 不能为空');
  }
  modules[name] = value.default;
  return modules;
}, {});

configure({
  enforceActions: 'always',
});

const Stores = {
  userStore,
  timerStore,
  ...modules,
};

export const storeContext = createContext({ root: Stores });

/**
 * store 注入。
 * 使用：
 *    1. @inject((root) => ({userStore: root.userStore}))
 *    2. inject((root) => ({userStore: root.userStore}))(ReactComponent)
 * @param selector
 * @returns {function(WrappedComponent): function(*=): *}
 */
export const inject = (selector) => (Component) => {
  const WrapperComponent = (ownProps = {}) => {
    const { root } = useContext(storeContext);
    const props = { ...selector(root), ...ownProps };
    return <Component {...props} />;
  };
  WrapperComponent.displayName = Component.name;
  return WrapperComponent;
};

export default Stores;
