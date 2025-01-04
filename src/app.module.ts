import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/ormconfig';
import { CollegesModule } from './modules/colleges/colleges.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), CollegesModule, AuthModule],
})
export class AppModule {}
