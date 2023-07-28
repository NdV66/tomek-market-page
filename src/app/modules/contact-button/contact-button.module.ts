import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { ContactButtonComponent } from './contact-button.component';

@NgModule({
  declarations: [ContactButtonComponent],
  imports: [CommonModule, BrowserAnimationsModule, FormsModule, NzButtonModule],
  exports: [ContactButtonComponent],
})
export class ContactButtonModule {}
