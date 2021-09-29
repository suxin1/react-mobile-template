import { PageContainer } from './styled';
import NavBar from './component/Navbar';
import { NAV_LIST } from './constants';

const Layout = (props) => {
  return (
    <>
      <PageContainer>{props.children}</PageContainer>
      <NavBar navList={NAV_LIST} />
    </>
  );
};

export default Layout;
