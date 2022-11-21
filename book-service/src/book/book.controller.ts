import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { BookService } from './book.service';
import { PayloadBookService } from './payload.interface';

@Controller('book')
export class BookController {
    constructor(
        private readonly bookService: BookService
    ){}

    @MessagePattern({ cmd:'getBooks' })
    getBooks(): any {
        return this.bookService.findAll();
    }

    @MessagePattern({ cmd:'getBookById' })
    getBookById(payload: PayloadBookService): any {
        return this.bookService.findOne(Number(payload.id));
    }

    @MessagePattern({ cmd:'createBook'})
    createBook(payload: PayloadBookService): any {
        return this.bookService.create(payload.book);
    }

    @MessagePattern({ cmd:'updateBook'})
    updateBook(payload: PayloadBookService): any {
        return this.bookService.update(Number(payload.id), payload.book);
    }

    @MessagePattern({ cmd:'deleteBookById' })
    deleteBookById(payload: PayloadBookService): any {
        return this.bookService.delete(Number(payload.id));
    }
}
