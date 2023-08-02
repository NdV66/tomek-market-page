import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { EAppLangs, TAppErrors, TAvailableTranslation, TTranslations } from 'app/types';
import { ILangModel } from 'app/models';

export interface ITranslationsService {
    appLang$: Observable<EAppLangs>;
    translations$: Observable<TTranslations>;

    changeLang: (lang: EAppLangs) => void;
    setupFromCookies: () => void;
    availableTranslations: TAvailableTranslation[];
}

@Injectable({
    providedIn: 'root',
})
export class TranslationsService implements ITranslationsService {
    private _appLang$: BehaviorSubject<EAppLangs>;
    private _translations$: BehaviorSubject<TTranslations>;

    constructor(
        @Inject('langModel') private _langModel: ILangModel,
        @Inject('appErrors') private _appErrors: TAppErrors,
    ) {
        const defaultLang = this.getTranslationsByLang(this._langModel.lang);
        this._appLang$ = new BehaviorSubject(this._langModel.lang);
        this._translations$ = new BehaviorSubject(defaultLang);

        this._subscribeToLang$();
    }

    get appLang$() {
        return this._appLang$.asObservable();
    }

    get translations$() {
        return this._translations$.asObservable();
    }

    get availableTranslations() {
        const keys = Object.keys(EAppLangs);

        return keys.map((key) => ({
            key: (EAppLangs as any)[key],
            value: this._buildLangName(key),
        }));
    }

    public changeLang = (lang: EAppLangs) => {
        this._appLang$.next(lang);
    };

    public setupFromCookies() {
        this._syncWithModel();
    }

    private _buildLangName(key: string) {
        const translations = this._langModel.getTranslationsByLang((EAppLangs as any)[key]);
        return translations!!.lang;
    }

    public getTranslationsByLang(lang: EAppLangs) {
        const translations = this._langModel.getTranslationsByLang(lang);
        this._checkGalleryImageTranslations(translations);
        return translations;
    }

    private _syncWithModel() {
        this._appLang$.next(this._langModel.lang);
    }

    private _subscribeToLang$() {
        this._appLang$.subscribe((lang) => {
            const translations = this.getTranslationsByLang(lang);

            this._langModel.lang = lang;
            this._translations$.next(translations);
        });
    }

    private _checkGalleryImageTranslations(translations: TTranslations) {
        const { length } = translations.gallery.images;
        const mustBeDivisibleBy = [3, 2];
        const result = mustBeDivisibleBy.every((value) => length % value === 0);

        if (!result) this._appErrors.GALLERY_IMAGES_SHOULD_BE_DIVIDED;
    }
}
