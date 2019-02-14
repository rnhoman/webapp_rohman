import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelImageComponent } from './panel-image.component';

describe('PanelImageComponent', () => {
  let component: PanelImageComponent;
  let fixture: ComponentFixture<PanelImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
