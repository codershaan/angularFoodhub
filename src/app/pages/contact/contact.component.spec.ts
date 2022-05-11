import { AgmCoreModule } from '@agm/core';
import { Overlay } from '@angular/cdk/overlay';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_SCROLL_STRATEGY } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DEFAULT_LANGUAGE, MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateModule, TranslateParser, TranslateService, TranslateStore, USE_DEFAULT_LANG, USE_EXTEND, USE_STORE } from '@ngx-translate/core';
import { AppService } from 'src/app/app.service';
import { AppSettings } from 'src/app/app.settings';
import { SharedModule } from 'src/app/shared/shared.module';
import {ContactComponent} from './contact.component';

describe('ContactComponent', ()=>{
   
    let component: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;

    beforeEach(waitForAsync(()=>{
        TestBed.configureTestingModule({
            declarations: [ContactComponent],
            imports: [CommonModule,
                RouterModule,
                SharedModule,
                FormsModule, 
                TranslateModule,
                HttpClientModule,
                AgmCoreModule,
                BrowserAnimationsModule
            ],
            providers: [
                AppSettings, FormBuilder, AppService, HttpClient, HttpHandler, DatePipe, MatDialog, Overlay, TranslateService, TranslateStore,
                TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler,
            {provide: USE_DEFAULT_LANG,useValue: undefined}, {provide: USE_STORE,useValue: undefined},
            {provide: USE_EXTEND,useValue: undefined}, {provide: DEFAULT_LANGUAGE,useValue: undefined},
        ]
        }).compileComponents();

        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should craete', ()=>{
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.contactForm.valid).toBeFalsy();
    });

    it('Form field validity', () => {
        let name = component.contactForm.controls['name'];
        let email = component.contactForm.controls['email'];
        let phone = component.contactForm.controls['phone'];
        let message = component.contactForm.controls['message'];
        expect(name.valid).toBeFalsy();
        expect(email.valid).toBeFalsy();
        expect(phone.valid).toBeFalsy();
        expect(message.valid).toBeFalsy();
    });
    it('submitting a form emits a user', () => {
        expect(component.contactForm.valid).toBeFalsy();
        component.contactForm.controls['name'].setValue("test");
        component.contactForm.controls['email'].setValue("test@test.com");
        component.contactForm.controls['phone'].setValue("123456789");
        component.contactForm.controls['message'].setValue("testmessage");
        expect(component.contactForm.valid).toBeTruthy();

        // Trigger the login function
        component.onContactFormSubmit();
    });
});