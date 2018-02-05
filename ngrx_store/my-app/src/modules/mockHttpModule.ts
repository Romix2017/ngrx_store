import { NgModule, Injector } from '@angular/core';
import {
  HttpModule, XHRBackend, BrowserXhr,
  ResponseOptions, XSRFStrategy
} from '@angular/http';
import {
  InMemoryBackendService,
  InMemoryDbService
} from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../common/services/dbService'
import { environment } from '../environments/environment';
export function getXHRBackend(injector: Injector, browser: BrowserXhr,
  xsrf: XSRFStrategy, options: ResponseOptions): any {
  if (environment.production) {
    return new XHRBackend(browser, options, xsrf);
  } else {
    return new InMemoryBackendService(
      injector,
      new InMemoryDataService(),
      { apiBase: 'api/latest/' }
    );
  }
}
@NgModule({
  imports: [HttpModule],
  providers: [
    {
      provide: XHRBackend,
      useFactory: getXHRBackend,
      deps: [Injector, BrowserXhr, XSRFStrategy, ResponseOptions]
    }
  ]
})
export class MockHttpModule {
}
