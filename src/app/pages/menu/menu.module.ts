import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { MenuSingleComponent } from './menu-single/menu-single.component';

export const routes = [
  { path: ':id', component: MenuSingleComponent }
];

@NgModule({
  declarations: [
    MenuSingleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    PipesModule
  ]
})
export class MenuModule { }
