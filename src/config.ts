import { ConfigModule } from '@nestjs/config';

export const configmodule = ConfigModule.forRoot({
  envFilePath: [
    process.env.ENV_FILE_PATH?.trim() ?? `.env.${process.env.NODE_ENV}.local`,
    `.env.${process.env.NODE_ENV}`,
    '.env.production',
  ],
});

/*
для использования переменных из другого файла (ENV_FILE_PATH)
прописать в терминале ---и на порту 3000
$env:ENV_FILE_PATH="D:\stag\.env.development.variableprod"; yarn start
*/
