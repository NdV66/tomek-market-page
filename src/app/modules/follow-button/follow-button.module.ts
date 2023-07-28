import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { FollowButtonComponent } from './follow-button.component';

@NgModule({
  declarations: [FollowButtonComponent],
  imports: [CommonModule, NzButtonModule],
  exports: [FollowButtonComponent],
})
export class FollowButtonModule {}
