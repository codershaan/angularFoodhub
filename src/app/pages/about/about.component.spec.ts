import {ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppSettings } from 'src/app/app.settings';
import {AboutComponent} from './about.component';

describe('AboutComponent', ()=>{
   
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    beforeEach(waitForAsync(()=>{
        TestBed.configureTestingModule({
            declarations: [AboutComponent],
            imports: [],
            providers: [AppSettings]
        }).compileComponents();

        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should craete', ()=>{
        expect(component).toBeTruthy();
    });

    it('Skywave word should include in about us content', ()=>{
        const contentElm: HTMLElement = fixture.nativeElement;
        const p = contentElm.querySelector('p')!;
        expect(p.textContent?.includes("Skywave")).toBeTrue();
    })
});