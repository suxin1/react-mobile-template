?????`src/page/` ??????? `module.js` ???? Mox Store ???????????
##### ????? store ?????
`./<pathname>/module.js => '<pathname>Store'`;
??`./home/module.js => 'homeStore'`

## ??
### 1, ?? React Context
page/home/module.js
```javascript
class Timer {
    secondsPassed = 0;
    
    constructor() {
    makeAutoObservable(this);
    }
    
    increaseTimer() {
    this.secondsPassed += 1;
    }
}

const myTimer = new Timer();
export const TimerContext = createContext(myTimer);
export default myTimer;
```
page/home/index.jsx
```javascript
import { TimerContext } from 'page/home/module.js';

const Home = () => {
  const store = useContext(TimerContext);
  return (
    <div>{store.secondsPassed}</div>
  );
}
export default observer(Home);
```

### 2, ?? Inject
page/home/index.jsx
```javascript
import Alignment from 'component/Alignment';
import { observer } from 'mobx-react-lite';
import { inject } from 'store';

const Profile = ({ store }) => {
  return (
    <Alignment align="center-center" style={{ height: '90vh' }}>
      <h1>????</h1>
      <h4>{store.secondsPassed}</h4>
    </Alignment>
  );
};

const store2props = (store) => ({ store: store.timerStore });

export default inject(store2props)(observer(Profile));
```
