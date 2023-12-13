import { Routes } from '@angular/router';
import { MyWordsComponent } from './routes/my-words/my-words.component';
import { WordsComponent } from './routes/words/words.component';

export const routes: Routes = [
  {
    path: '',
    component: WordsComponent,
  },
  {
    path: 'my-words',
    component: MyWordsComponent,
  },
];
