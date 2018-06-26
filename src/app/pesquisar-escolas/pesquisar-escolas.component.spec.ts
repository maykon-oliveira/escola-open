import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarEscolasComponent } from './pesquisar-escolas.component';

describe('PesquisarEscolasComponent', () => {
  let component: PesquisarEscolasComponent;
  let fixture: ComponentFixture<PesquisarEscolasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarEscolasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarEscolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
