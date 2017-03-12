import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertaintyComponent } from './certainty.component';

describe('CertaintyComponent', () => {
  let component: CertaintyComponent;
  let fixture: ComponentFixture<CertaintyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertaintyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertaintyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
