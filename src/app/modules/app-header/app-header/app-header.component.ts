import { Component, Inject } from '@angular/core';

import { WithTranslationsComponent } from 'app/components';
import { TranslationsService } from 'app/services';
import { EAppLangs, TAppEnv } from 'app/types';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.less'],
})
export class AppHeaderComponent extends WithTranslationsComponent {
  public selectedLang: EAppLangs;

  constructor(
    @Inject('appEnv') appEnv: TAppEnv,
    _translationsService: TranslationsService
  ) {
    super(appEnv, _translationsService);
    this.selectedLang = this.lang;
  }

  get allLangs() {
    return this._translationsService.availableTranslations;
  }

  public handleChangeLangAction(lang: string) {
    this._translationsService.changeLang(lang as EAppLangs);
  }
}
