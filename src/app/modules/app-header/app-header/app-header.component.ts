import { Component, Inject, Input } from '@angular/core';

import { WithTranslationsComponent } from 'app/components';
import { TranslationsService } from 'app/services';
import { EAppLangs, TAppEnv, TAvailableTranslation } from 'app/types';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent extends WithTranslationsComponent {
  @Input() text = 'TEXT HERE';
  public lang: EAppLangs;
  public allLangs: TAvailableTranslation[];

  constructor(
    @Inject('appEnv') appEnv: TAppEnv,
    _translationsService: TranslationsService
  ) {
    super(appEnv, _translationsService);
    this.lang = appEnv.defaultLang;
    this.allLangs = _translationsService.availableTranslations;
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this._subscribeToCurrentLang();
  }

  public handleChangeLangAction(lang: string) {
    console.log('>>>> AAA');
    this._translationsService.changeLang(lang as EAppLangs);
  }

  private _subscribeToCurrentLang() {
    this._translationsService.appLang$.subscribe((lang) => {
      this.lang = lang;
      this.translations = this._translationsService.getTranslationsByLang(lang);
    });
  }
}
