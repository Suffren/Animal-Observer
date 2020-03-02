import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsInfoListComponent } from './animals-info-list.component';

describe('AnimalsInfoListComponent', () => {
  let component: AnimalsInfoListComponent;
  let fixture: ComponentFixture<AnimalsInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
