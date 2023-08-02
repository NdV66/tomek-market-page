import { Component } from '@angular/core';
import { WithTranslationsComponent } from 'app/components';
import { EMainTitleDirections } from '../main-title/main-title.component';

@Component({
    selector: 'app-together',
    templateUrl: './together.component.html',
    styleUrls: ['./together.component.less'],
})
export class TogetherComponent extends WithTranslationsComponent {
    public direction = EMainTitleDirections.RIGHT;
}
