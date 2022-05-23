import axios from "axios";
import { LostPeople, LostSSN } from "../types";
export const searchDate = async (
  date: string,
  setLostData: React.Dispatch<React.SetStateAction<LostPeople[] | undefined>>
) => {
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
export const searchSSN = async (
  ssn: string,
  setData: React.Dispatch<React.SetStateAction<LostSSN[] | undefined>>
) => {
  axios
    .get(`https://glacial-everglades-74360.herokuapp.com/findbyid?id=${ssn}`)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const searchName = async (
  name: string,
  setData: React.Dispatch<React.SetStateAction<LostSSN[] | undefined>>
) => {
  axios
    .get(`https://glacial-everglades-74360.herokuapp.com/findbyid?name=${name}`)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const searchSsnAndName = async (
  ssn: string,
  name: string,
  setData: React.Dispatch<React.SetStateAction<LostSSN[] | undefined>>
) => {
  axios
    .get(
      `https://glacial-everglades-74360.herokuapp.com/findbyid?name=${name}&id=${ssn}`
    )
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
