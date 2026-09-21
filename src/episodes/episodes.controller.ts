import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
        console.log(sort);
        return 'all episodes';
    }

    @Get('featured')
    findFeatured() {
        return 'featured episodes';
    }

    @Get(':id')
    findOne(@Param() id: string) {
        console.log(id);
        return 'one episode';
    }

    @Post()
    create() {
        return 'new episode';
    }
}
