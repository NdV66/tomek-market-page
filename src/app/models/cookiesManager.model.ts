import Cookies from 'js-cookie';
import { EAppLangs, ECookieKeys } from 'app/types';

export interface ICookiesManager {
    appLang?: EAppLangs;
    setAppLangCookie: (lang: EAppLangs) => void;
}

export class CookiesManager implements ICookiesManager {
    public setAppLangCookie(lang: EAppLangs) {
        Cookies.set(ECookieKeys.LANG, lang);
    }

    get appLang() {
        return Cookies.get(ECookieKeys.LANG) as EAppLangs;
    }
}
