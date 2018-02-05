import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let items = [
      { id: '1', name: 'first name', description: 'first description' },
      { id: '2', name: 'second name', description: 'second description' },
      { id: '3', name: 'third name', description: 'third description' },
      { id: '4', name: 'fourth name', description: 'fourth description' },
    ];

    let widgets = [
      { id: '1', name: 'goose', price: '200' },
      { id: '2', name: 'bread', price: '250' },
      { id: '3', name: 'juice', price: '350' },
      { id: '4', name: 'apples', price: '120' },
    ]

    return { 'items': items, 'widgets': widgets };
  }
}
