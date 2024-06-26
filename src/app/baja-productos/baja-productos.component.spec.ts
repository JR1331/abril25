import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaProductosComponent } from './baja-productos.component';

describe('BajaProductosComponent', () => {
  let component: BajaProductosComponent;
  let fixture: ComponentFixture<BajaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BajaProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BajaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
