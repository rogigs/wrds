import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'words' },
  {
    path: 'words',
    loadChildren: () =>
      import('./routes/words/words.routes').then((m) => m.WORDS_ROUTES),
  },
];
