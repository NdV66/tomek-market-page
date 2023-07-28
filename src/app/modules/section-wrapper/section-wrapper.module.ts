import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzGridModule } from 'ng-zorro-antd/grid';

import { SectionWrapperComponent } from './section-wrapper.component';

@NgModule({
  declarations: [SectionWrapperComponent],
  imports: [CommonModule, NzGridModule],
  exports: [SectionWrapperComponent],
})
export class SectionWrapperModule {}
