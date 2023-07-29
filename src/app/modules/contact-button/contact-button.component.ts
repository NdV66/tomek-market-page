import { Component, Inject, Input } from '@angular/core';
import { WithTranslationsComponent } from '../../components/with-translations.component';
import { TAppEnv } from 'app/types';
import { TranslationsService } from 'app/services';

@Component({
    selector: 'app-contact-button',
    templateUrl: './contact-button.component.html',
})
export class ContactButtonComponent extends WithTranslationsComponent {
    @Input() text = '';

    constructor(@Inject('appEnv') appEnv: TAppEnv, translationsService: TranslationsService) {
        super(appEnv, translationsService);
        this.text = this.translations.contact;
    }
}
