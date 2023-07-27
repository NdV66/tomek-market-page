import { EAppLangs } from './EAppLangs';
import { TTranslationsMapping } from './TTranslationsMapping';

export type TAppEnv = {
  defaultLang: EAppLangs;
  translations: TTranslationsMapping;
};
