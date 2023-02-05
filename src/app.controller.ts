import { Controller, Get} from "@nestjs/common"

@Controller('app')
export class AppController {
    @Get('/rootRoute')
    getRootRoute() {
        return 'first API after webstorm';
    }
}