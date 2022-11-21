import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CustomerService } from './customer.service';
import { PayloadCustomerService } from './payload.interface';

@Controller('customer')
export class CustomerController {
    constructor(
        private readonly customerService: CustomerService
    ){}

    @MessagePattern({ cmd:'getCustomers' })
    getCustomers(): any {
        return this.customerService.findAll();
    }

    @MessagePattern({ cmd:'getCustomerById' })
    getCustomerById(payload: PayloadCustomerService): any {
        return this.customerService.findOne(Number(payload.id));
    }

    @MessagePattern({ cmd:'createCustomer'})
    createCustomer(payload: PayloadCustomerService): any {
        return this.customerService.create(payload.customer);
    }

    @MessagePattern({ cmd:'updateCustomer'})
    updateCustomer(payload: PayloadCustomerService): any {
        return this.customerService.update(Number(payload.id), payload.customer);
    }

    @MessagePattern({ cmd:'deleteCustomerById' })
    deleteCustomerById(payload: PayloadCustomerService): any {
        return this.customerService.delete(Number(payload.id));
    }
}
