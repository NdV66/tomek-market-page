import { Component, Inject } from '@angular/core';

import { APP_ENV, langModel } from 'app/appEnv';
import { TranslationsService } from 'app/services';
import { EAppLangs, TAppEnv, TTranslations } from 'app/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  providers: [
    TranslationsService,
    { provide: 'langModel', useValue: langModel },
    { provide: 'appEnv', useValue: APP_ENV },
  ],
})
export class AppComponent {
  title = 'tomek-market-page';
  lang: EAppLangs;
  translations: TTranslations;

  constructor(
    @Inject('appEnv') appEnv: TAppEnv,
    private _translationsService: TranslationsService
  ) {
    this.lang = appEnv.defaultLang;
    this.translations = this._translationsService.getTranslationsByLang(
      this.lang
    );
  }

  ngOnInit(): void {
    this._subscribeToCurrentLang();
  }

  public handleChangeLangAction(lang: string) {
    this._translationsService.changeLang(lang as EAppLangs);
  }

  private _subscribeToCurrentLang() {
    this._translationsService.appLang$.subscribe((lang) => {
      this.lang = lang;
      this.translations = this._translationsService.getTranslationsByLang(lang);
    });
  }
}
