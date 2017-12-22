import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let customCats = [{
        id: 1001,
        name: 'abc'
    }];
    return {customCats};
  }
}