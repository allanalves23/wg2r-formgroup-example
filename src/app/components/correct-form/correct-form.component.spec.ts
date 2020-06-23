import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectFormComponent } from './correct-form.component';

describe('CorrectFormComponent', () => {
  let component: CorrectFormComponent;
  let fixture: ComponentFixture<CorrectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
