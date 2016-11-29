import {Component} from '@angular/core';
import {Customer} from '../Model/Customer';

@Component({
    selector : 'customer-ui',
    templateUrl : '../UI/Customer.html'
})
export class CustomerComponent{
    public customerObj : Customer = new Customer();
    
    public customers : Array<Customer> = new Array<Customer>();
    
    Add(){
        this.customers.push(this.customerObj);
        this.customerObj = new Customer();
    }
    
    Select(cust:Customer){
        this.customerObj = Object.assign({}, cust);
    }
    
    Update(){
        this.customers.forEach(element => {
            if (element.CustomerCode == this.customerObj.CustomerCode){
                element.CustomerName = this.customerObj.CustomerName;
                element.CustomerAmount = this.customerObj.CustomerAmount;
            }
        });
        
        this.customerObj = new Customer();
    }
    
    Cancel(){
        this.customerObj = new Customer();
    }
    
    Delete(index:number){
        this.customers.splice(index, 1);
    }
}
