import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { MenuComponent } from './components/menu-component/menu-component';
import { ComponentList } from './components/user/component-list/component-list';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'users',
    component: User,
    children: [
      {
        path: 'list',
        component: ComponentList
      }
    ]
  }
];
