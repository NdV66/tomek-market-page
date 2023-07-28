import { Component } from '@angular/core';
import { WithTranslationsComponent } from '../../components/with-translations.component';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.less'],
})
export class ContactButtonComponent extends WithTranslationsComponent {}
