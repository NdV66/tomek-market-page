import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from 'app/components';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
