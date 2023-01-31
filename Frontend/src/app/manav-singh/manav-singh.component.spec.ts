import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManavSinghComponent } from './manav-singh.component';

describe('ManavSinghComponent', () => {
  let component: ManavSinghComponent;
  let fixture: ComponentFixture<ManavSinghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManavSinghComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManavSinghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
