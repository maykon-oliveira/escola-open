import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseEnemComponent } from './analise-enem.component';

describe('AnaliseEnemComponent', () => {
  let component: AnaliseEnemComponent;
  let fixture: ComponentFixture<AnaliseEnemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliseEnemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliseEnemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
