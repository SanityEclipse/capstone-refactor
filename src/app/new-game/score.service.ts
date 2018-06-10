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
    console.log(Score);
    return this.http.get<Score[]>('api/scores')
    // .pipe(
    //   tap(scores => this.log(`fetched scores`)),
    //   catchError(this.handleError('getScores', []))
    // );
  }

  // createScores(name, score) {
  //
  //   this.http.post('/highscores', { name: name,  score: score })
  //       .toPromise()
  //       .then()
  //       .catch(this.handleError);
  //   }

  createScores(score:Score):Observable<Score> {
    return this.http.post<Score>('./highscores', score, httpOptions)
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

//   private handleError<T> (operation = 'operation', result?: T) {
//   return (error: any): Observable<T> => {
//
//     // TODO: send the error to remote logging infrastructure
//     console.error(error); // log to console instead
//
//     // TODO: better job of transforming error for user consumption
//     this.log(`${operation} failed: ${error.message}`);
//
//     // Let the app keep running by returning an empty result.
//     return of(result as T);
//   };
// }
//
// /** Log a HeroService message with the MessageService */
// private log(message: string) {
//   this.messageService.add('HeroService: ' + message);
// }

}
