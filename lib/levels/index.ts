import { Level } from './types';
import { basicsLevels } from './basics';
import { intermediateLevels } from './intermediate';
import { advancedLevels } from './advanced';
import { cSpecificLevels } from './c-specific';

export const levels: Level[] = [
  ...basicsLevels,
  ...intermediateLevels,
  ...advancedLevels,
  ...cSpecificLevels
];

export * from './types';
