import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { MenuComponent } from './components/menu-component/menu-component';
import { ComponentList } from './components/user/component-list/component-list';
import { EstateComponent } from './components/estate-component/estate-component';
import { EstateList } from './components/estate-component/estate-list/estate-list';

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
  },
  {
    path: 'estates',
    component: EstateComponent,
    children: [
      {
        path: 'list',
        component: EstateList
      }
    ]
  }
];
