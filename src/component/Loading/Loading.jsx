import { useState, useEffect } from 'react';
import './Loading.less';

const Loading = () => {
  const [show, setShow] = useState(false);
  // TODO 调用clearTimeout后下面的回调也执行了，导致 Loading 被销毁后调用 setShow 报错。
  const id = setTimeout(() => {
    console.log('set state');
    setShow(true);
  }, 300);
  useEffect(() => {
    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <>
      {show ? (
        <div className="wrapper wrapper--loading">
          {/*<img src="./assets/loading.svg" style={{ width: '50px' }} />*/}
          加载中
        </div>
      ) : null}
    </>
  );
};

export default Loading;
