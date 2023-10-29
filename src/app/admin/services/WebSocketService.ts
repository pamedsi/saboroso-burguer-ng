import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import * as SockJS from 'sockjs-client'
import * as Stomp from 'stompjs'
import {defaultWithToken} from "../utils/Headers";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private readonly url = 'http://localhost:8080/orders';
  stompClient: any
  topic = '/topic/greetings'
  responseSubject = new Subject()

  connect(){
    console.log("Conectando...")
    const ws = SockJS(this.url)
    this.stompClient = Stomp.over(ws)

    this.stompClient.connect({headers: defaultWithToken}, (frame: any) => {
      this.stompClient.subscribe(this.topic, (greetingResponse: any) => {
        this.onMessageReceived(greetingResponse)
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
