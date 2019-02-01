import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProfileDetailsComponent } from './app-profile-details.component';

describe('AppProfileDetailsComponent', () => {
  let component: AppProfileDetailsComponent;
  let fixture: ComponentFixture<AppProfileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProfileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
