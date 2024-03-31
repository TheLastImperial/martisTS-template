import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { activeItem, openDrawer } from "../store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useUIStore = ()=>{
  const dispatch = useAppDispatch();
  const { drawerOpen, openItem } = useAppSelector((state) => state.ui);

  const startActiveItem = (item: string[])=>{
    dispatch(activeItem(item))
  };

  const startOpenDrawer = (open: boolean) =>{
    dispatch(openDrawer(open));
  };

  return {
    drawerOpen,
    openItem,
    startActiveItem,
    startOpenDrawer,
  }
}
