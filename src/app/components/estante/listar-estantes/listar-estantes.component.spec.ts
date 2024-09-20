import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstantesComponent } from './listar-estantes.component';

describe('ListarEstantesComponent', () => {
  let component: ListarEstantesComponent;
  let fixture: ComponentFixture<ListarEstantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarEstantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarEstantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
