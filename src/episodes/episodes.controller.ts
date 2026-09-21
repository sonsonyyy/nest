import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';

@Controller('episodes')
export class EpisodesController {
    constructor(private episodeService: EpisodesService) {}

    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
        console.log(sort);
        return this.episodeService.findAll(sort);
    }

    @Get('featured')
    findFeatured() {
        return this.episodeService.findFeatured();
    }

    @Get(':id')
    findOne(@Param() id: string) {
        console.log(id);
        return this.episodeService.findOne(id);
    }

    @Post()
    create(@Body() input: CreateEpisodeDto) {
        return this.episodeService.create(input);
    }
}
