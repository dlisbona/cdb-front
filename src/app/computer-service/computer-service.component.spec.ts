import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerServiceComponent } from './computer-service.component';

describe('ComputerServiceComponent', () => {
  let component: ComputerServiceComponent;
  let fixture: ComponentFixture<ComputerServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
