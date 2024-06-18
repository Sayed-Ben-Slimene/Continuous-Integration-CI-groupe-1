import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDevopsCIComponent } from './demo-devops-ci.component';

describe('DemoDevopsCIComponent', () => {
  let component: DemoDevopsCIComponent;
  let fixture: ComponentFixture<DemoDevopsCIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDevopsCIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDevopsCIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
