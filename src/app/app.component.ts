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
  public translations: TTranslations; //TODO show load until empty!

  constructor(
    @Inject('appEnv') appEnv: TAppEnv,
    private _translationsService: TranslationsService
  ) {
    this.translations = this._translationsService.getTranslationsByLang(
      appEnv.defaultLang
    );
  }

  ngOnInit(): void {
    this._subscribeToTranslations();
  }

  private _subscribeToTranslations() {
    this._translationsService.translations$.subscribe((translations) => {
      this.translations = translations;
    });
  }
}
