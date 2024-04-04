import { useAppDispatch, useAppSelector } from '../../store'
import { onSetDraweOpen, onSetOpenItem } from '../store';

export const useUIStore = () => {
  const dispatch = useAppDispatch();
  const {
    drawerWidth,
    drawerOpen,
    openItem,
    menu,
    notifications,
  } = useAppSelector((state) => state.ui2);

  const startActiveItem = (item: string[])=>{
    dispatch(onSetOpenItem(item));
  }
  const startOpenDrawer = (open: boolean)=>{
    dispatch(onSetDraweOpen(open));
  }
  return {
    drawerWidth,
    drawerOpen,
    openItem,
    menu,
    notifications,
    startActiveItem,
    startOpenDrawer
  }
};
