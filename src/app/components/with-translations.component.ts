import { Component, Inject } from '@angular/core';
import { TranslationsService } from 'app/services';
import { EAppLangs, TAppEnv, TTranslations } from 'app/types';

export interface IWithTranslationsComponent {
    lang: EAppLangs;
    translations: TTranslations;
}

@Component({
    selector: 'app-with-translations',
    template: ``,
})
export class WithTranslationsComponent implements IWithTranslationsComponent {
    private _lang: EAppLangs;
    private _translations: TTranslations;

    constructor(
        @Inject('appEnv') appEnv: TAppEnv,
        protected _translationsService: TranslationsService,
    ) {
        this._lang = appEnv.defaultLang;
        this._translations = this._translationsService.getTranslationsByLang(appEnv.defaultLang);
    }

    get lang() {
        return this._lang;
    }

    get translations() {
        return this._translations;
    }

    ngOnInit(): void {
        this._subscribeToCurrentLang();
        this._subscribeToTranslations();
    }

    private _subscribeToTranslations() {
        this._translationsService.translations$.subscribe((translations) => {
            this._translations = translations;
        });
    }

    private _subscribeToCurrentLang() {
        this._translationsService.appLang$.subscribe((lang) => {
            this._lang = lang;
            this._translations = this._translationsService.getTranslationsByLang(lang);
        });
    }
}
