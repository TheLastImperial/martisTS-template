import Api from "src/api/Api";
import { useAppDispatch, useAppSelector } from "src/store";
import { onSetCurrentPatient, onSetPatients } from "../store/patientsSlice";

interface INewPatient {
  name: string
  motherLastname: string
  fatherLastname: string
  birthday: Date
};

export const usePatientStore = ()=>{
  const dispatch = useAppDispatch();
  const {
    patients,
    currentPatient,
    count
  } = useAppSelector( state => state.patients )

  const startGetPatients = async (
    limit:number = 5,
    offset:number = 0,
    q:(string | undefined)=undefined
  ) => {

    let params = {
      limit, offset, q
    };
    const { data } = await Api.get('/patients', { params });
    dispatch(onSetPatients(data));
  };

  const startSavingPatient = async ( patient : INewPatient)=> {
    try{
      const resp = await Api.post("/patients", patient);
      console.log(resp);
    }catch(e){
      console.log(e)
    }
  }

  const startDeletingPatient = async(id: string)=>{
    try{
      await Api.delete(`/patients/${id}`)
    }catch(e){
      console.log(e)
    }
  }

  const startGetPatient = async ( id: number ) => {
    try{
      const { data } = await Api.get(`/patients/${id}`);
      dispatch(onSetCurrentPatient(data))
    }catch(e){
      console.log(e);
    }
  }

  const startUpdatingPatient = async (id: number,patient: INewPatient) => {
    try{
      const { data } = await Api.patch(`/patients/${id}`, patient);
      console.log(data)
    }catch(e){
      console.log(e);
    }
  }

  return {
    patients,
    currentPatient,
    count,
    startGetPatients,
    startSavingPatient,
    startGetPatient,
    startUpdatingPatient,
    startDeletingPatient,
  };
}
