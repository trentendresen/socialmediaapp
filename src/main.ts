import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
import { AppModule } from './app/app.module';

Amplify.configure(config);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
