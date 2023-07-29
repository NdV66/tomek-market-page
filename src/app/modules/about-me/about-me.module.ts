import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { AboutMeComponent } from './about-me.component';
import { SectionWrapperModule } from '../section-wrapper/section-wrapper.module';
import { MainTitleModule } from '../main-title/main-title.module';

@NgModule({
    declarations: [AboutMeComponent],
    imports: [CommonModule, SectionWrapperModule, MainTitleModule, NzTypographyModule],
    exports: [AboutMeComponent],
})
export class AboutMeModule {}
