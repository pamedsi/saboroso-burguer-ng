import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import * as SockJS from 'sockjs-client'
import * as Stomp from 'stompjs'
import {defaultWithToken} from "../utils/Headers";
import {environment} from "../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private readonly url = `${environment.API_URL.replace('api', 'orders')}`
  stompClient: any
  responseSubject = new Subject()

  connect(){
    console.log("Conectando...")
    const ws = SockJS(this.url)
    this.stompClient = Stomp.over(ws)

    this.stompClient.connect({headers: defaultWithToken}, () => {
      this.stompClient.subscribe('/topic/orders', (newOrderMessage: any) => {
        this.onMessageReceived(newOrderMessage)
      })
    }, this.errorCallBack)

    console.log(("Conectado ✅"))
  }

  disconnect(){
    if (this.stompClient!== null) this.stompClient.disconnect()
    console.log("Disconnected")
  }

  errorCallBack(error: any){
    console.error(error)

    setTimeout(() => {
      this.connect()
    }, 5000)
  }

  sendMessage(messageString: string) {
    const message = {message: messageString}
    this.stompClient.send('/app/hello', {}, JSON.stringify(message))
  }

  onMessageReceived(receivedMessage: any){
    console.log("Message received from server:", receivedMessage.body)
    const object = JSON.parse(receivedMessage.body)
    this.responseSubject.next(object)
  }

}
