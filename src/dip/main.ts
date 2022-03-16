import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './classes/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer('Luiz', 'Miranda', '111111111');
const enterpriseCustomer = new EnterpriseCustomer('Tech LTDA', '11.111.1111/0001-11');
const order = new Order(shoppingCart, messaging, persistency, enterpriseCustomer);

shoppingCart.addItem(new Product('Camiseta',49.01))
shoppingCart.addItem(new Product('Calça',69.99))
shoppingCart.addItem(new Product('Tenis', 50))

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus)
order.checkout();
console.log(order.orderStatus)
