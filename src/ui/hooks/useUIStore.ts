import { useAppDispatch, useAppSelector } from 'src/store'
import { onSetDraweOpen, onSetLoading, onSetOpenItem } from '../store';

export const useUIStore = () => {
  const dispatch = useAppDispatch();
  const {
    drawerWidth,
    drawerOpen,
    openItem,
    menu,
    notifications,
    loading,
  } = useAppSelector((state) => state.ui);

  const startActiveItem = (item: string[])=>{
    dispatch(onSetOpenItem(item));
  };

  const startOpenDrawer = (open: boolean)=>{
    dispatch(onSetDraweOpen(open));
  };

  const startSetLoading = (loading: boolean) => {
    dispatch(onSetLoading(loading))
  };

  return {
    drawerWidth,
    drawerOpen,
    openItem,
    menu,
    notifications,
    loading,
    startActiveItem,
    startOpenDrawer,
    startSetLoading,
  };
};
