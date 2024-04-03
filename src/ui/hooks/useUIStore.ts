import { useAppDispatch, useAppSelector } from '../../store'

export const useUIStore = () => {
  const dispatch = useAppDispatch();
  const {
    drawerWidth,
    notifications
  } = useAppSelector((state) => state.ui2);

  return {
    drawerWidth,
    notifications,
  }
};
