import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { EAppLangs, TAvailableTranslation } from 'app/types';
import { ILangModel } from 'app/models';

export interface ITranslationsService {
  appLang$: Observable<EAppLangs>;

  changeLang: (lang: EAppLangs) => void;
  setupFromCookies: () => void;
  availableTranslations: TAvailableTranslation[];
}

@Injectable({
  providedIn: 'root',
})
export class TranslationsService implements ITranslationsService {
  private _appLang$: BehaviorSubject<EAppLangs>;

  constructor(@Inject('langModel') private _langModel: ILangModel) {
    this._appLang$ = new BehaviorSubject(this._langModel.lang);
    this._subscribeToLang$();
  }

  private _syncWithModel() {
    this._appLang$.next(this._langModel.lang);
  }

  private _subscribeToLang$() {
    this._appLang$.subscribe((lang) => {
      this._langModel.lang = lang;
    });
  }

  get appLang$() {
    return this._appLang$.asObservable();
  }

  public changeLang = (lang: EAppLangs) => {
    this._appLang$.next(lang);
  };

  public setupFromCookies() {
    this._syncWithModel();
  }

  private _buildLangName(key: string) {
    const translations = this._langModel.getTranslationsByLang(
      (EAppLangs as any)[key]
    );
    return translations!!.lang;
  }

  public getTranslationsByLang(lang: EAppLangs) {
    return this._langModel.getTranslationsByLang(lang);
  }

  get availableTranslations() {
    const keys = Object.keys(EAppLangs);

    return keys.map((key) => ({
      key: (EAppLangs as any)[key],
      value: this._buildLangName(key),
    }));
  }
}
