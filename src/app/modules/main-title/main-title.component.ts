import { Component, Input } from '@angular/core';

export enum EMainTitleDirections {
    RIGHT = 'right',
    LEFT = 'left',
}

@Component({
    selector: 'app-main-title',
    templateUrl: './main-title.component.html',
    styleUrls: ['./main-title.component.less'],
})
export class MainTitleComponent {
    @Input() title = '';
    @Input() direction: EMainTitleDirections = EMainTitleDirections.LEFT;
}
