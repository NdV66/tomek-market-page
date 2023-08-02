import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { SectionWrapperModule } from 'app/modules/section-wrapper/section-wrapper.module';
import { MainTitleModule } from 'app/modules/main-title/main-title.module';

import { WorkComponent } from './work.component';
import { WorkStepComponent } from './work-step/work-step.component';

@NgModule({
    declarations: [WorkComponent, WorkStepComponent],
    imports: [CommonModule, SectionWrapperModule, MainTitleModule, NzTypographyModule],
    exports: [WorkComponent],
})
export class WorkModule {}
