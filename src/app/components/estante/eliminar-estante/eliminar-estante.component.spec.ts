import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEstanteComponent } from './eliminar-estante.component';

describe('EliminarEstanteComponent', () => {
  let component: EliminarEstanteComponent;
  let fixture: ComponentFixture<EliminarEstanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarEstanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarEstanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
