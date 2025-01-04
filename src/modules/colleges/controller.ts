import { Controller, Get, Query } from '@nestjs/common';

@Controller('colleges')
export class CollegesController {
  @Get()
  getColleges(@Query('city') city: string, @Query('state') state: string) {
    // Return filtered colleges by city or state.
  }
}
