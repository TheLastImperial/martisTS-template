interface IPatientStore {
  name: string
  fatherLastname: string
  motherLastname: string
  birthday: string
}

export interface PatientStore {
  patients: Patient[];
  currentPatient: IPatientStore | null;
  count: number;
};

export interface Patient{
  id: string;
  title: string;
  notes: string;
};
