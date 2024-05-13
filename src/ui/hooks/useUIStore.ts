import { useAppDispatch, useAppSelector } from 'src/store'
import {
  onSetDraweOpen, onSetLoading, onSetMode, onSetOpenItem,
} from '../store';

export const useUIStore = () => {
  const dispatch = useAppDispatch();
  const {
    drawerWidth,
    drawerOpen,
    openItem,
    menu,
    notifications,
    loading,
    config: {
      darkMode,
      mode,
    }
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

  const startSetDarkMode = (darkMode: boolean) => {
    dispatch(onSetMode(darkMode))
  }

  return {
    drawerWidth,
    drawerOpen,
    openItem,
    menu,
    notifications,
    loading,
    darkMode,
    mode,
    startActiveItem,
    startOpenDrawer,
    startSetLoading,
    startSetDarkMode,
  };
};
