import * as Joi from 'joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().required(),

  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),

  // REDIS_HOST: Joi.string().required(),
  // REDIS_PORT: Joi.number().required(),
  // REDIS_USERNAME: Joi.string(),
  // REDIS_PASSWORD: Joi.string(),
  // REDIS_KEY_PREFIX: Joi.string().required(),
  // REDIS_USE_TLS: Joi.string().required(),


  AWS_REGION: Joi.string().required(),
  AWS_ACCESS_KEY_ID: Joi.string().required(),
  AWS_SECRET_ACCESS_KEY: Joi.string().required(),
  AWS_SNS_TOPIC_ARN: Joi.string().required(),
  AWS_SQS_NAME: Joi.string().required(),
  AWS_SQS_URL: Joi.string().required()
});
