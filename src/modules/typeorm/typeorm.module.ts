import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'your_username',
            password: 'your_password',
            database: 'your_database',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true, // только для разработки!
        }),
    ],
    controllers: [],
    providers: [],
})

export class TypeOrmModule {}