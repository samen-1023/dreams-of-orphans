import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'dreams-of-orphans',
    entities: [__dirname + '/entity/*.ts'],
    synchronize: true,
    logging: false,
})
