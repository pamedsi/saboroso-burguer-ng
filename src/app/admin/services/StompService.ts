import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StompService {
  // socket = new SockJS('ws://localhost:8080/ws/order-manager');
  // stompClient = Stomp.over(this.socket)
  //
  // subscribe(topic: string, callback: Function){
  //   const connected = this.stompClient.connected
  //
  //   if (connected) {
  //     this.subscribeToTopic(topic, callback)
  //     return
  //   }
  //
  //   this.stompClient.connect({}, () => {
  //     this.subscribeToTopic(topic, callback)
  //   })
  // }
  //
  // subscribeToTopic(topic: string, callback: Function) {
  //   this.stompClient.subscribe(topic, () => { callback() })
  // }
}
