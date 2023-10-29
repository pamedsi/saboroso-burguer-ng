import { HttpHeaders } from "@angular/common/http";

export const defaultHeaders = new HttpHeaders({'Content-Type': 'application/json'})

export const defaultWithToken = new HttpHeaders({
  'Authorization': `Bearer ${localStorage.getItem('token')}`
})
export const withTokenAndBody= new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('token')}`
})

export const withWebSocketVersion = new HttpHeaders({
  'Sec-WebSocket-Version': '13',
  'Sec-WebSocket-Key': 'OVVyrhif4H0MXNF6LHl/GA==',
  'Connection': 'Upgrade',
  'Upgrade': 'websocket',
  'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
  'Host': 'localhost:8080'
})
