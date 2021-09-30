import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

class Module {
  constructor() {
    makeAutoObservable(this);
  }
  staticNumber = {};
  groupsData = {};
  storageTrendDada = { years: [], values: [] };
  monthlyTrendData = [];
}
const statisticStore = new Module();
export const statisticStoreContext = createContext(statisticStore);

export default statisticStore;
