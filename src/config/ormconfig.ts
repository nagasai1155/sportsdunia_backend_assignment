import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_username', // Replace with your PostgreSQL username
  password: 'your_password', // Replace with your PostgreSQL password
  database: 'college_db',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, // Disable in production
};
