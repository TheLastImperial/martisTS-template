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

interface IPhone{
  number: number
};

interface INewAddress{
  street: String;
  city: String;
  zip: String;
};

interface INewPatient {
  name: string;
  fatherLastName: string;
  motherLastName: string;
  birthday: Date;
  address: INewAddress;
  phones: IPhone[];
};

interface IEditPatient extends INewPatient {

}
