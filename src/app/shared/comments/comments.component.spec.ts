import { AgmCoreModule } from '@agm/core';
import { Overlay } from '@angular/cdk/overlay';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_SCROLL_STRATEGY } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DEFAULT_LANGUAGE, MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateModule, TranslateParser, TranslateService, TranslateStore, USE_DEFAULT_LANG, USE_EXTEND, USE_STORE } from '@ngx-translate/core';
import { AppService } from 'src/app/app.service';
import { AppSettings } from 'src/app/app.settings';
import { SharedModule } from 'src/app/shared/shared.module';
import {CommentsComponent} from './comments.component';
import { Location } from "@angular/common";

describe('ContactComponent', ()=>{
   
    let component: CommentsComponent;
    let fixture: ComponentFixture<CommentsComponent>;
    let location: Location;
    let router: Router;

    beforeEach(waitForAsync(()=>{
        TestBed.configureTestingModule({
            declarations: [CommentsComponent],
            imports: [CommonModule,
                RouterModule,
                SharedModule,
                FormsModule, 
                TranslateModule,
                HttpClientModule,
                AgmCoreModule,
                RouterModule.forRoot([]),
                RouterTestingModule.withRoutes([]),
                BrowserAnimationsModule
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
        fixture = TestBed.createComponent(CommentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should craete', ()=>{
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.commentForm.valid).toBeFalsy();
    });

    it('Form field validity', () => {
        let review = component.commentForm.controls['review'];
        let name = component.commentForm.controls['name'];
        let email = component.commentForm.controls['email'];
        let rate = component.commentForm.controls['rate'];
        let menuItemId = component.commentForm.controls['menuItemId'];
        expect(review.valid).toBeFalsy();
        expect(name.valid).toBeFalsy();
        expect(email.valid).toBeFalsy();
        expect(rate.valid).toBeTruthy();
        expect(menuItemId.valid).toBeTruthy();
    });

    it('submitting onCommentFormSubmit', () => {
        expect(component.commentForm.valid).toBeFalsy();
        component.commentForm.controls['review'].setValue('test');
        component.commentForm.controls['name'].setValue('test');
        component.commentForm.controls['email'].setValue("test@g.com");
        component.commentForm.controls['rate'].setValue(20);
        component.commentForm.controls['menuItemId'].setValue(17);
        expect(component.commentForm.valid).toBeTruthy();
        
        let _value = {
            "rate" : 20,
            "review" : 'test',
            "name": 'test',
            "email" : 'test@g.com'
        }
        // Trigger the login function
        component.onCommentFormSubmit(_value);
    });

    // To tset HTTP call use fakeAsync, tick Method and flash 
});