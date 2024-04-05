// project import
import NavCard from './NavCard';
import Navigation from './Navigation';
import { SimpleBarScroll } from 'components/SimpleBar';

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
