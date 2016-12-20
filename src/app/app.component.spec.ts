/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {By} from "@angular/platform-browser";
import {AuthService} from './userAuth/auth.service';
import {RouterLinkStubDirective} from '../../testing/router-stubs';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {log} from 'util';


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, RouterLinkStubDirective],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: AuthService, useValue: {isLoggedIn: false}}
      ]
    })
  });

  it('should create the app', () => {
    let fixture = TestBed.crea4200teComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Pet Shop'`, () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Pet Shop');
  });

  it('should render title in a h1 tag', () => {
    // TestBed.overrideModule(AppModule, {remove: {imports: [TimeModule]}});
    // TestBed.overrideModule(AppModule, {set: {schemas: [NO_ERRORS_SCHEMA]}});
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement;
    expect(compiled.query(By.css('h1')).nativeElement.textContent).toContain('Pet Shop');
  });

  it('toolbar should have links to register & login if not already logged in', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement;
    let toolBar = compiled.query(By.css('.toolbar'));
    expect(toolBar.queryAll(By.directive(RouterLinkStubDirective)).length).toEqual(2);
  });

  it('toolbar should not have links to register & login if already logged in', inject([AuthService], (authService: AuthService) => {
    let fixture = TestBed.createComponent(AppComponent);
    authService.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement;
    let toolBar = compiled.query(By.css('.toolbar'));
    expect(toolBar.queryAll(By.directive(RouterLinkStubDirective)).length).toEqual(0);
  }));

  it('checks login button takes us to login', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement;
    let toolBar = compiled.query(By.css('.toolbar'));
    let login = toolBar.queryAll(By.css('.loginLink'))
      .filter(fixture => fixture.attributes['routerLink'] === 'login')[0];
       //the following code steps out of the app.component boundries and actually test routerLink, here only for demo
    login.triggerEventHandler('click', null);
    fixture.detectChanges();
    let routerStub = login.injector.get(RouterLinkStubDirective);
    expect(routerStub.navigatedTo).toEqual(true);
  });
});
