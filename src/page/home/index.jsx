// import { useContext } from 'react';

import Paragraph from 'component/Paragraph';
import Alignment from '../../component/Alignment';

export default function Home() {
  return (
    <div>
      <Alignment align="space-between" style={{ height: '30px' }}>
        <span>horizontal</span>
        <span>horizontal</span>
      </Alignment>
      <Alignment align="space-between" type="vertical" style={{ height: '60px', background: 'lightblue' }}>
        <span>vertical</span>
        <span>vertical</span>
      </Alignment>
      <Paragraph variant="title">标头</Paragraph>
      <Paragraph variant="subtitle1">标头</Paragraph>
      <Paragraph variant="subtitle2">标头</Paragraph>
    </div>
  );
}
