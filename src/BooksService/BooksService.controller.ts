import {Body, Controller, Get, Post} from "@nestjs/common";
import {BooksService} from "./BooksService.service";
import {Book} from "./data/book";
import {IBook} from "./interfaces/book.interface";


@Controller('BooksService')
export class BooksController {
    constructor(private  readonly booksService: BooksService) {}

    @Get
    async findAll() {
        const book = new Book();
        this.booksService.create(book);
        return this.booksService.findAll();
    }

    @Post()
    async create(@Body() createBookDto: IBook) {
        return this.booksService.create(createBookDto);
    }

}