import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistropublicoComponent } from './registropublico.component';

describe('RegistropublicoComponent', () => {
  let component: RegistropublicoComponent;
  let fixture: ComponentFixture<RegistropublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistropublicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistropublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
