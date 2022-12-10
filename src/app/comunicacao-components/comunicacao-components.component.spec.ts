import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacaoComponentsComponent } from './comunicacao-components.component';

describe('ComunicacaoComponentsComponent', () => {
  let component: ComunicacaoComponentsComponent;
  let fixture: ComponentFixture<ComunicacaoComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunicacaoComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicacaoComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
