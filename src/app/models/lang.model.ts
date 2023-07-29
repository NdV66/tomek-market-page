import { EAppLangs, TTranslations, TTranslationsMapping } from 'app/types';
import { ICookiesManager } from './cookiesManager.model';

export interface ILangModel {
    lang: EAppLangs;
    getTranslationsByLang: (lang: EAppLangs) => TTranslations;
}

export class LangModel implements ILangModel {
    constructor(
        private _defaultLang: EAppLangs,
        private _mappedTranslations: TTranslationsMapping,
        private _cookiesManager: ICookiesManager,
    ) {
        !this._cookiesManager.appLang && this._cookiesManager.setAppLangCookie(this._defaultLang);
    }

    set lang(data: EAppLangs) {
        this._cookiesManager.setAppLangCookie(data);
    }

    get lang() {
        return this._cookiesManager.appLang || this._defaultLang;
    }

    public getTranslationsByLang(lang: EAppLangs) {
        return this._mappedTranslations[lang];
    }
}
