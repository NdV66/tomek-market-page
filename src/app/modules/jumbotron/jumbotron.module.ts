import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JumbotronComponent } from './jumbotron.component';
import { ContactButtonModule } from 'app/modules';

@NgModule({
  declarations: [JumbotronComponent],
  imports: [CommonModule, ContactButtonModule],
  exports: [JumbotronComponent],
})
export class JumbotronModule {}
