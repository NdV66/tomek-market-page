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
        console.log(this.text);
        // const textIsProvided = this.text === this.translations.contact;

        // !textIsProvided &&
        //     this._translationsService.translations$.subscribe((translations) => {
        //         this.text = translations.contact;
        //     });
    }

    ngOnChanges() {
        console.log('CHANGE', this.text);
        this.text = this.text || this.translations.contact;
    }
}
