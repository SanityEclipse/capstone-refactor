import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Score } from './Score';
// import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class ScoreService {

  constructor(
    private http: HttpClient,
  ) {
    // window.ScoreService = this
  }

  getScores(): Observable<Score[]> {
    return this.http.get<Score[]>('api/scores')
  }

  createScores(score:Score): Observable<Score>{
    return this.http.post<Score>('api/scores', score, httpOptions)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

}
