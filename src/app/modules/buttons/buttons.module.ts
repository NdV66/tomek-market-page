import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsComponent } from './buttons.component';
import { FollowButtonModule } from 'app/modules/follow-button/follow-button.module';
import { ContactButtonModule } from 'app/modules/contact-button/contact-button.module';

@NgModule({
    declarations: [ButtonsComponent],
    imports: [CommonModule, FollowButtonModule, ContactButtonModule],
    exports: [ButtonsComponent],
})
export class ButtonsModule {}
