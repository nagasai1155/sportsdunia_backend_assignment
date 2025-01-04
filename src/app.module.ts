import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/ormconfig';
import { CollegesModule } from './modules/colleges/colleges.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), CollegesModule],
})
export class AppModule {}
