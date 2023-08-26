import { INPUT_REG } from './constants/game';

export function checkInput(value: string) {
  return INPUT_REG.test(value);
}
