import { HttpHeaders } from "@angular/common/http";

export const defaultHeaders = new HttpHeaders({'Content-Type': 'application/json'})

export const withTokenHeaders = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`})