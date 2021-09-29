import Alignment from 'component/Alignment';
import { observer } from 'mobx-react-lite';
import { inject } from 'store';

const Profile = ({ store }) => {
  return (
    <Alignment align="center-center" style={{ height: '90vh' }}>
      <h1>个人信息</h1>
      <h4>{store.secondsPassed}</h4>
    </Alignment>
  );
};

const store2props = (store) => ({ store: store.timerStore });

export default inject(store2props)(observer(Profile));
