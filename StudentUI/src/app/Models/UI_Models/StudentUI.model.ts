import { Gender } from "../API_Models/gender.model"
import { Address } from "./AddressUI.model"


export interface Student{
  id:string,
  firstName:string,
  lastName:string,
  dateOfBirth:string,
  email:string,
  mobile:number,
  profileImageUrl?:string,
  genderId:string,
  gender:Gender
  address:Address

}
