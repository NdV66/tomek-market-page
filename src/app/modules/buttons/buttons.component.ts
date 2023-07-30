import { Component, Input } from '@angular/core';
import { WithTranslationsComponent } from 'app/components';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.less'],
})
export class ButtonsComponent extends WithTranslationsComponent {
    @Input() public mainActionText = this.translations.contact;
}
