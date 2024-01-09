import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exampleWordResponse } from './responses/words-api.response';
import { environment } from '../../environments/environment';

export type Word = typeof exampleWordResponse;
@Injectable({ providedIn: 'root' })
export class WordsApiService {
  constructor(private http: HttpClient) {}

  getWord(word: string) {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': environment.apiKey,
    });

    return this.http.get<Word>(
      `https://wordsapiv1.p.rapidapi.com/words/${word}`,
      { headers }
    );
  }
}
