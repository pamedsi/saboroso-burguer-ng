import { HttpHeaders } from "@angular/common/http";

export const defaultHeaders = new HttpHeaders({'Content-Type': 'application/json'})

export const defaultWithToken = new HttpHeaders({
  'Authorization': `Bearer ${localStorage.getItem('token')}`
})
export const withTokenAndBody= new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('token')}`
})
