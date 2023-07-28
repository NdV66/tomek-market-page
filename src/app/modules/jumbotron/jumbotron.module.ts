import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JumbotronComponent } from './jumbotron.component';
import { ContactButtonModule } from 'app/modules';
import { FollowButtonModule } from 'app/modules/follow-button/follow-button.module'; //TODO wtf

@NgModule({
  declarations: [JumbotronComponent],
  imports: [CommonModule, ContactButtonModule, FollowButtonModule],
  exports: [JumbotronComponent],
})
export class JumbotronModule {}
