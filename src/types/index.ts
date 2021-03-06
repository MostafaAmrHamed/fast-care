export type Details = {
  shirt_color: string;
  hair_color: string;
  skin_color: string;
  details: string;
  height: string;
  index: number;
};
export type LostPeople = {
  shirt_color: string;
  hair_color: string;
  skin_color: string;
  height: string;
  date_of_lost: string;
  gender: string;
  status: string;
  details: string;
  reason: string;
  hospital_name: string;
  hospital_phone: string;
  id: number;
};
export type LostSSN = {
  name: string;
  national_id: string;
  date_of_lost: string;
  gender: string;
  status: string;
  reason: string;
  hospital_name: string;
  hospital_phone: string;
  id: number;
};
export type BloodType = {
  type: string;
  count: number;
  hospital_name: string;
  hospital_longtitude: string;
  hospital_latitude: string;
  hospital_phone: string;
  id: number;
};
export type Blood = {
  hospital_name: string;
  hospital_phone: string;
  id: number;
};
export type RoomsData = {
  type: string;
  count: number;
  hospital_name: string;
  hospital_longtitude: string;
  hospital_latitude: string;
  hospital_phone: string;
  id: number;
};
export type RoomsLocation = {
  hospital_name: string;
  hospital_phone: string;
  id: number;
};
