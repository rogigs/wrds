import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WordsApiService {
  constructor(private http: HttpClient) {}

  getWord(word: string): Observable<any[]> {
    return this.http.get<any[]>(
      `https://wordsapiv1.p.rapidapi.com/words/${word}`,
      {
        headers: {},
      }
    );
  }
}
