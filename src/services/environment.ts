// export const isProductionEnvironment = true;
export const isProductionEnvironment = process?.env?.NODE_ENV === 'production';
export const isDevelopmentEnvironment = !isProductionEnvironment;
