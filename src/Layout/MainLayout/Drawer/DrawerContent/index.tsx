// project import
import NavCard from './NavCard';
import Navigation from './Navigation';
// @ts-ignore
import { SimpleBarScroll } from 'components';

const DrawerContent = () => (
  <SimpleBarScroll
    sx={{
      '& .simplebar-content': {
        display: 'flex',
        flexDirection: 'column'
      }
    }}
  >
    <Navigation />
    <NavCard />
  </SimpleBarScroll>
);

export default DrawerContent;
