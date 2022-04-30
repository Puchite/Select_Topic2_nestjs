import { HistoryEntity } from './entity/history.entity';
import { Module } from '@nestjs/common';
import { HistoryController } from './controller/history/history.controller';
import { HistoryService } from './service/history/history.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryEntity])],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
