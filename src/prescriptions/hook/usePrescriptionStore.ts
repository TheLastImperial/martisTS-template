import Api from "src/api/Api";
import { useAppDispatch, useAppSelector } from "src/store";
import { onSetPrescriptions } from "../store";

export const usePrescriptionStore = ()=> {
  const {
    prescriptions,
    count
  } = useAppSelector(state => state.prescriptions);
  const dispatch = useAppDispatch();

  const startGettingPrescriptions = async (
    limit: number, offset: number, q: (string | undefined)
  )=>{
    try{
      const { data } = await Api.get('/prescriptions', {
        params: {
          limit, offset, q
        }
      });
      dispatch(onSetPrescriptions(data));
    }catch(e){
      console.log(e)
    }
  };

  const startSavingPrescriptions = async (prescription) =>{
    try{
      const { data } = await Api.post('/prescriptions', prescription);
    }catch(e){
      console.log(e)
    }
  };

  return {
    prescriptions, count,
    startGettingPrescriptions,
    startSavingPrescriptions,
  };
}