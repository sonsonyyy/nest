import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { ConfigService } from 'src/config/config.service';

@Controller('episodes')
export class EpisodesController {
    constructor(
        private episodeService: EpisodesService,
        private configService: ConfigService
    ) {}

    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
        console.log(sort);
        this.configService.logMessage();
        return this.episodeService.findAll(sort);
    }

    @Get('featured')
    findFeatured() {
        this.configService.logMessage();
        return this.episodeService.findFeatured();
    }

    @Get(':id')
    findOne(@Param() id: string) {
        console.log(id);
        this.configService.logMessage();
        return this.episodeService.findOne(id);
    }

    @Post()
    create(@Body() input: CreateEpisodeDto) {
        this.configService.logMessage();
        return this.episodeService.create(input);
    }
}
