import { AppEnv } from './environment'

export const sum = (a: number, b: number) => {
  if (AppEnv.ENV === 'development') return -1
  return a + b
}
