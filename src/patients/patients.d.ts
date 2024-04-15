export interface PatientStore {
  patients: Patient[];
  count: number;
};

export interface Patient{
  id: string;
  title: string;
  notes: string;
};
