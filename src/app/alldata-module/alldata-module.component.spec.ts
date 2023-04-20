import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldataModuleComponent } from './alldata-module.component';

describe('AlldataModuleComponent', () => {
  let component: AlldataModuleComponent;
  let fixture: ComponentFixture<AlldataModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldataModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlldataModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
