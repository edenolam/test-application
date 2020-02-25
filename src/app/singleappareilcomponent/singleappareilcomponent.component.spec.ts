import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleappareilcomponentComponent } from './singleappareilcomponent.component';

describe('SingleappareilcomponentComponent', () => {
  let component: SingleappareilcomponentComponent;
  let fixture: ComponentFixture<SingleappareilcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleappareilcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleappareilcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
