import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { SectionWrapperModule } from '../section-wrapper/section-wrapper.module';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [CommonModule, SectionWrapperModule],
  exports: [AboutMeComponent],
})
export class AboutMeModule {}
