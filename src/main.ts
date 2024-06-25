import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

<<<<<<< HEAD

platformBrowserDynamic().bootstrapModule(AppModule)
=======
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
>>>>>>> cd4fc20 (first commit2)
  .catch(err => console.error(err));
