import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { AppHeaderComponent } from './app-header/app-header.component';

@NgModule({
  declarations: [AppHeaderComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NzSelectModule,
    NzLayoutModule,
  ],
  exports: [AppHeaderComponent],
})
export class AppHeaderModule {}