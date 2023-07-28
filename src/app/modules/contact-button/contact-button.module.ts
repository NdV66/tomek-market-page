import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { ContactButtonComponent } from './contact-button.component';

@NgModule({
  declarations: [ContactButtonComponent],
  imports: [CommonModule, BrowserAnimationsModule, NzButtonModule],
  exports: [ContactButtonComponent],
})
export class ContactButtonModule {}
