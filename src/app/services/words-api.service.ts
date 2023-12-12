import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exampleWordResponse } from './responses/words-api.response';

export type WordDefinition = typeof exampleWordResponse;
@Injectable({ providedIn: 'root' })
export class WordsApiService {
  constructor(private http: HttpClient) {}

  getWord(word: string): Observable<WordDefinition> {
    return this.http.get<WordDefinition>(
      `https://wordsapiv1.p.rapidapi.com/words/${word}`
    );
  }
}
