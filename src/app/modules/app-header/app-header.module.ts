import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { AppHeaderComponent } from './app-header.component';

@NgModule({
  declarations: [AppHeaderComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,

    NzSelectModule,
    NzLayoutModule,
    NzPageHeaderModule,
  ],
  exports: [AppHeaderComponent],
})
export class AppHeaderModule {}
