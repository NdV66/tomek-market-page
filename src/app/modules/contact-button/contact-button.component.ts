import { Component, Input } from '@angular/core';
import { WithTranslationsComponent } from 'app/components/with-translations.component';

@Component({
    selector: 'app-contact-button',
    templateUrl: './contact-button.component.html',
})
export class ContactButtonComponent extends WithTranslationsComponent {
    @Input() text = this.translations.contact;

    override ngOnInit(): void {
        super.ngOnInit();
        const textIsProvided = this.text === this.translations.contact;

        this._translationsService.translations$.subscribe((translations) => {
            !textIsProvided && (this.text = translations.contact);
        });
    }
}
