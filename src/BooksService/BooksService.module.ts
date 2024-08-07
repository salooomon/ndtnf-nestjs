import {Module} from "@nestjs/common";
import {BooksService} from "./BooksService.service";
import {BooksController} from "./BooksService.controller";


@Module({
    controllers: [BooksController],
    providers: [BooksService],
    exports: [BooksService]
})

export class BooksServiceModule {}