import {Module} from "@nestjs/common";
import {BooksService} from "./BooksService.service";


@Module({
    providers: [BooksService],
    exports: [BooksService]
})

export class BooksServiceModule {}