import { Component, Inject } from '@angular/core';

import { TranslationsService } from 'app/services';
import { TAppEnv } from 'app/types';
import { WithTranslationsComponent } from './components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent extends WithTranslationsComponent {
    constructor(@Inject('appEnv') appEnv: TAppEnv, translationsService: TranslationsService) {
        super(appEnv, translationsService);
    }
}
