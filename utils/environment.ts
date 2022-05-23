import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const AppEnv = {

  NODE_ENV: publicRuntimeConfig.NODE_ENV as
    | 'development'
    | 'production'
    | 'test',
  ENV: publicRuntimeConfig.ENV as 'development' | 'production' | 'uat',
};
