import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'foo',
    loadComponent: () =>
      import('./app/foo/foo.component').then((c) => c.FooComponent),
  },
];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes as any))],
}).catch((err) => console.error(err));
