import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { ConfigService } from '../config/config.service';

@Controller('episodes')
export class EpisodesController {
  constructor(
    private episodeService: EpisodesService,
    private configService: ConfigService,
  ) {}

  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);
    this.configService.logMessage();
    return this.episodeService.findAll(sort);
  }

  @Get('featured')
  findFeaturedEpisodes() {
    this.configService.logMessage();
    return this.episodeService.findFeaturedEpisodes();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    console.log(id);
    this.configService.logMessage();
    const episode = await this.episodeService.findOne(id);
    if (!episode) {
      throw new NotFoundException('Episode not found');
    }

    return episode;
  }

  @Post()
  create(@Body() input: CreateEpisodeDto) {
    this.configService.logMessage();
    return this.episodeService.create(input);
  }
}
