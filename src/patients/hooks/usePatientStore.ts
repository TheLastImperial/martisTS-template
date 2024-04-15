import Api from "src/api/Api";
import { useAppDispatch, useAppSelector } from "src/store";
import { onSetPatients } from "../store/patientsSlice";

export const usePatientStore = ()=>{
  const dispatch = useAppDispatch();
  const { patients, count } = useAppSelector( state => state.patients )

  const startGetPatients = async (
    limit:number = 5,
    offset:number = 1,
    q:(string | undefined)=undefined
  ) => {

    let params = {
      limit, offset, q
    };
    const { data } = await Api.get('/events', { params });
    dispatch(onSetPatients(data));
  };

  return {
    patients,
    count,
    startGetPatients,
  };
}
