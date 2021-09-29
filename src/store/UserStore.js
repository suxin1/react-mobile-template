import { observable, action, configure, computed } from 'mobx';
import { createContext } from 'react';

configure({
  enforceActions: 'always',
});

class UserStore {
  @observable
  name = 'ssssss';

  @observable
  count = 0;

  @action
  changeName = (name) => (this.name = name);

  @action
  increment = () => (this.count = this.count + 1);

  @computed
  get nameLength() {
    return this.name.length;
  }
}

const userStore = new UserStore();

const UserStoreContext = createContext(userStore);

export default userStore;
