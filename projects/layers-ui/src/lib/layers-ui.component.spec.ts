import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayersUiComponent } from './layers-ui.component';

describe('LayersUiComponent', () => {
  let component: LayersUiComponent;
  let fixture: ComponentFixture<LayersUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayersUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayersUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
