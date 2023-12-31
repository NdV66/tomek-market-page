import { Component, Inject, ViewEncapsulation } from '@angular/core';

import { WithTranslationsComponent } from 'app/components';
import { TranslationsService } from 'app/services';
import { EAppLangs, TAppEnv } from 'app/types';

@Component({
    selector: 'app-app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.less'],
    encapsulation: ViewEncapsulation.None,
})
export class AppHeaderComponent extends WithTranslationsComponent {
    public selectedLang: EAppLangs;

    constructor(@Inject('appEnv') appEnv: TAppEnv, _translationsService: TranslationsService) {
        super(appEnv, _translationsService);
        this.selectedLang = this.lang;
    }

    override ngOnInit(): void {
        super.ngOnInit();
        this._syncSelectedLang();
    }

    get allLangs() {
        return this._translationsService.availableTranslations;
    }

    public handleChangeLangAction(lang: string) {
        this._translationsService.changeLang(lang as EAppLangs);
    }

    private _syncSelectedLang() {
        this.selectedLang = this.lang;
    }
}
