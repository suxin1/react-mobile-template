import { useContext } from 'react';

import { Rect } from './styled';
import { statisticStoreContext } from './module';

export default function Home() {
  const store = useContext(statisticStoreContext);
  return (
    <div>
      <Rect color="#CCCCCC" />
      <Rect color="#CCCCCC" />
      <Rect color="#CCCCCC" />
      <Rect color="#CCCCCC" />
      <Rect color="#CCCCCC" />
      <Rect color="#CCCCCC" />
      <Rect color="#CCCCCC" />
    </div>
  );
}
