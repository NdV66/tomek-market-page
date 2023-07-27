import { Component, Inject } from '@angular/core';

import { APP_ENV, langModel } from 'app/appEnv';
import { TranslationsService } from 'app/services';
import { TAppEnv } from 'app/types';
import { WithTranslationsComponent } from './components';

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
export class AppComponent extends WithTranslationsComponent {
  constructor(
    @Inject('appEnv') appEnv: TAppEnv,
    translationsService: TranslationsService
  ) {
    super(appEnv, translationsService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }
}
