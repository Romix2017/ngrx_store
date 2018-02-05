import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: require('./app.component.html')
})

export class App {
  links = {
    items: ['/items'],
    widgets: ['/widgets']
  }
}
