import { Component, Inject } from '@angular/core';
import { TranslationsService } from 'app/services';
import { TAppEnv, TTranslations } from 'app/types';

@Component({
  selector: 'app-with-translations',
  template: ``,
})
export class WithTranslationsComponent {
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
