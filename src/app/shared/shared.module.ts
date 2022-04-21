import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  
import { FlexLayoutModule } from '@angular/flex-layout';
import { SwiperModule } from 'ngx-swiper-wrapper'; 
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: false,
  suppressScrollX: true               
};

import { PipesModule } from '../theme/pipes/pipes.module';
import { DirectivesModule } from '../theme/directives/directives.module';

import { LogoComponent } from './logo/logo.component';
import { HeaderImageComponent } from './header-image/header-image.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuItemsCarouselComponent } from './menu-items-carousel/menu-items-carousel.component';
import { CommentsComponent } from './comments/comments.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LogoComponent,
    HeaderImageComponent,
    GetInTouchComponent,
    MenuItemComponent,
    MenuItemsCarouselComponent,
    CommentsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule, 
    FlexLayoutModule,
    SwiperModule, 
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatTabsModule,
    MatTooltipModule,    
    PerfectScrollbarModule,
    PipesModule,
    DirectivesModule
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule, 
    FlexLayoutModule,
    SwiperModule, 
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatPaginatorModule,    
    MatToolbarModule,
    MatTabsModule,
    MatTooltipModule,        
    PerfectScrollbarModule,
    PipesModule,
    DirectivesModule,
    LogoComponent,
    HeaderImageComponent,
    GetInTouchComponent,
    MenuItemComponent,
    MenuItemsCarouselComponent,
    CommentsComponent
  ],
  providers:[
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ]
})
export class SharedModule { }
