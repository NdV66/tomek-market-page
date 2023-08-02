import { EAppLangs } from './EAppLangs';
import { TTranslations } from './TTranslations';

export type TTranslationsMapping = {
    [key in EAppLangs]: TTranslations;
};
