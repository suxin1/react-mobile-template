import React from 'react';
import { ConfigProvider } from 'zarm';
import RouterWrapper from 'routers';
import Loading from './component/Loading';

const App = () => {
  return (
    <React.StrictMode>
      <React.Suspense fallback={<Loading />}>
        <RouterWrapper />
      </React.Suspense>
    </React.StrictMode>
  );
};

export default App;
