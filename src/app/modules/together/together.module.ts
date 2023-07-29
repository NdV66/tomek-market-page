import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTitleModule } from 'app/modules/main-title/main-title.module';
import { SectionWrapperModule } from 'app/modules/section-wrapper/section-wrapper.module';
import { TogetherComponent } from './together.component';

@NgModule({
  declarations: [TogetherComponent],
  imports: [CommonModule, MainTitleModule, SectionWrapperModule],
  exports: [TogetherComponent],
})
export class TogetherModule {}
