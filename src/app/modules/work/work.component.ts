import { Component } from '@angular/core';
import { WithTranslationsComponent } from 'app/components';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.less'],
})
export class WorkComponent extends WithTranslationsComponent {
    public stepsEntries: { index: number; value: string }[] = [];

    override ngOnInit(): void {
        super.ngOnInit();
        this._subscribeToChangeTranslations();
    }

    private _subscribeToChangeTranslations() {
        this._translationsService.translations$.subscribe(() => {
            console.log('work', this.translations.lang);
            for (let [index, value] of this.translations.work.steps.entries()) {
                this.stepsEntries.push({ index, value });
            }
        });
    }
}
