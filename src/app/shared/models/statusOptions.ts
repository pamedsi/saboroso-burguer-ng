import {IOrderStatus} from "./IOrderStatus";

export const statusOptions = [
  {
    label: 'Na fila',
    value: IOrderStatus.IN_QUEUE
  },
  {
    label: 'Em preparo',
    value: IOrderStatus.PREPARING
  },
  {
    label: 'Pronto',
    value: IOrderStatus.READY
  },
  {
    label: 'Saiu para a entrega',
    value: IOrderStatus.OUT_TO_DELIVERY
  },
  {
    label: 'Entregue',
    value: IOrderStatus.DELIVERED
  },
  {
    label: 'Cancelado',
    value: IOrderStatus.CANCELED
  }
]
