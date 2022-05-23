import axios from "axios";
import { LostPeople } from "../types";
export const searchDate = async (
  date: string,
  setLostData: React.Dispatch<React.SetStateAction<LostPeople[] | undefined>>
) => {
  let dataPerson: LostPeople[] = [];
  axios
    .get(
      `https://glacial-everglades-74360.herokuapp.com/findbycl/?date=${date}&format=json`
    )
    .then((response) => {
      setLostData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const searchGender = async (
  gender: string,
  setLostData: React.Dispatch<React.SetStateAction<LostPeople[] | undefined>>
) => {
  axios
    .get(
      `https://glacial-everglades-74360.herokuapp.com/findbycl/?gender=${gender}`
    )
    .then((response) => {
      setLostData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const searchDateAndGender = async (
  gender: string,
  date: string,
  setLostData: React.Dispatch<React.SetStateAction<LostPeople[] | undefined>>
) => {
  axios
    .get(
      `https://glacial-everglades-74360.herokuapp.com/findbycl?date=${date}&gender=${gender}`
    )
    .then((response) => {
      setLostData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
