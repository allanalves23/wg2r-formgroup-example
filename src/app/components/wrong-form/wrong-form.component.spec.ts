import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongFormComponent } from './wrong-form.component';

describe('WrongFormComponent', () => {
  let component: WrongFormComponent;
  let fixture: ComponentFixture<WrongFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrongFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
