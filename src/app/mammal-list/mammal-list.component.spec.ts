import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MammalListComponent } from './mammal-list.component';

describe('MammalListComponent', () => {
  let component: MammalListComponent;
  let fixture: ComponentFixture<MammalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MammalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MammalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
