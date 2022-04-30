/* eslint-disable prettier/prettier */
import { HistoryService } from './../../service/history/history.service';
import { Controller, Get, Param } from '@nestjs/common';
import { HistoryDto } from 'src/history/dto/history.dto/history-dto';

@Controller('history')
export class HistoryController {
    constructor(private HistoryService: HistoryService) {}
    
    @Get()
    Load_History(): Promise<HistoryDto[]> {
        return this.HistoryService.Load_History();
    }

    // @Get(':Course_ID/:Instructor_ID/:History_ID')
    // Load_AllData(@Param('Course_ID') Course_ID: string, 
    //             @Param('Instructor_ID') Instructor_ID: string, 
    //             @Param('History_ID') History_ID: number): 
    //             Promise<HistoryDto[]> {
    //     return this.HistoryService.Load_AllData(Course_ID, Instructor_ID, History_ID);
    // }

    @Get('AllData')
    Load_AllData(): Promise<HistoryDto[]> {
        return this.HistoryService.Load_AllData();
    }
}
