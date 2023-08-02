import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-work-step',
    templateUrl: './work-step.component.html',
    styleUrls: ['./work-step.component.less'],
})
export class WorkStepComponent {
    @Input() stepNumber = 0;
    @Input() title = '';
}
