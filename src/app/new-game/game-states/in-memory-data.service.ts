import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const scores = [
      {id: 0, name: 'AAA', score: 3500},
      {id: 1, name: 'BBB', score: 3000},
      {id: 2, name: 'CCC', score: 2345},
      {id: 3, name: 'DDD', score: 1234},
      {id: 4, name: 'EEE', score: 100},
    ];
    return {scores};
  }
}
