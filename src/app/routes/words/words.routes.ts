import { Routes } from '@angular/router';

import { WordsComponent } from './words.component';
import { MyWordsComponent } from './my-words/my-words.component';

export const WORDS_ROUTES: Routes = [
  { path: '', component: WordsComponent },
  { path: 'my-words', component: MyWordsComponent },
];
