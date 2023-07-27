import { LangModel, CookiesManager } from './models';
import { TRANSLATIONS_EN, TRANSLATIONS_PL } from './translations';
import { EAppLangs, TAppEnv, TTranslationsMapping } from './types';

const TRANSLATE_MAPPING: TTranslationsMapping = {
  [EAppLangs.EN]: TRANSLATIONS_EN,
  [EAppLangs.PL]: TRANSLATIONS_PL,
};

export const APP_ENV: TAppEnv = {
  defaultLang: EAppLangs.PL,
  translations: TRANSLATE_MAPPING,
};

const cookiesManager = new CookiesManager();
export const langModel = new LangModel(
  APP_ENV.defaultLang,
  APP_ENV.translations,
  cookiesManager
);
