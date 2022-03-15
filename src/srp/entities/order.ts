import { OrderStatus } from '../entities/interfaces/order-status';
import { ShoppingCart } from '../entities/shopping-cart';
import { Messaging } from '../entities/services/messaging'
import { Persistency } from '../entities/services/persistency';

export class Order {
  private _orderStatus: OrderStatus  = 'open';

  constructor(
    private readonly cart: ShoppingCart, 
    private readonly messaging: Messaging,
    private readonly persistency: Persistency
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed'
    this.messaging.sendMessage(
      `Seu pedido com total de R$ ${this.cart.total()} foi recebido.`
    );
    
    this.persistency.saveOrder();
    this.cart.clear();
  }
}