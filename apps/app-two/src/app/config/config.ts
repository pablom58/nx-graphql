import { registerAs } from '@nestjs/config';

export const config = registerAs('config', () => ({
  port: parseInt(process.env.PORT) || 8080,
  aws: {
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,

    sns: {
      topicArn: process.env.AWS_SNS_TOPIC_ARN
    },

    sqs: {
      name: process.env.AWS_SQS_NAME,
      url: process.env.AWS_SQS_URL
    }
  },
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
}));
