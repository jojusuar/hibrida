import { Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { Tab1Page } from './tab1/tab1.page';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'comments',
    component: CommentsComponent
  }
];
