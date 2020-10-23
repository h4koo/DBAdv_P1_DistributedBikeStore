import { OrderLine } from './order-line.model';

export class Order {
    client_id : number;
    emp_id : number;
    items : OrderLine[];
    required_date : Date;
}
