import { AgmCoreModule } from '@agm/core';
import { Overlay } from '@angular/cdk/overlay';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import {ComponentFixture, fakeAsync, inject, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_SCROLL_STRATEGY } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { DEFAULT_LANGUAGE, MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateModule, TranslateParser, TranslateService, TranslateStore, USE_DEFAULT_LANG, USE_EXTEND, USE_STORE } from '@ngx-translate/core';
import { MenuItem } from 'src/app/app.models';
import { AppService } from 'src/app/app.service';
import { AppSettings } from 'src/app/app.settings';
import { SharedModule } from 'src/app/shared/shared.module';
import {PagesComponent} from './pages.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {of} from 'rxjs';
import { Location } from "@angular/common";
import { RouterTestingModule } from '@angular/router/testing';


describe('PagesComponent', ()=>{
   
    let component: PagesComponent;
    let fixture: ComponentFixture<PagesComponent>;
    let location: Location;
    let router: Router;
    let appService: any;

    beforeEach(waitForAsync(()=>{
        TestBed.configureTestingModule({
            declarations: [PagesComponent],
            imports: [CommonModule,
                SharedModule,
                FormsModule, 
                TranslateModule,
                HttpClientModule,
                HttpClientTestingModule,
                AgmCoreModule,
                BrowserAnimationsModule,
                RouterModule.forRoot([]),
                RouterTestingModule.withRoutes([]),
            ],
            providers: [
                AppSettings, FormBuilder, AppService, HttpClient, HttpHandler, DatePipe, MatDialog, Overlay, TranslateService, TranslateStore,
                TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler,
            {provide: USE_DEFAULT_LANG,useValue: undefined}, {provide: USE_STORE,useValue: undefined},
            {provide: USE_EXTEND,useValue: undefined}, {provide: DEFAULT_LANGUAGE,useValue: undefined},
        ]
        }).compileComponents();
        
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        fixture = TestBed.createComponent(PagesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    }));

    beforeEach(inject([AppService], (s: any) => {
        appService = s;
    }));

    it('should craete', ()=>{
        expect(component).toBeTruthy();
    });

    it('trigger get categories', () => {
        let response:any = [];
        spyOn(appService, 'getCategories').and.returnValue(of(response))
        component.getCategories();
        expect(component.appService.Data.categories).toEqual(response);
    });
});