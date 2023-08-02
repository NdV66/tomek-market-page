import { Component, Input } from '@angular/core';
import { WithTranslationsComponent } from '../../components/with-translations.component';

@Component({
    selector: 'app-contact-button',
    templateUrl: './contact-button.component.html',
})
export class ContactButtonComponent extends WithTranslationsComponent {
    @Input() text = '';

    override ngOnInit(): void {
        this._translationsService.translations$.subscribe((translations) => {
            this.text = translations.contact;
        });
    }
}
