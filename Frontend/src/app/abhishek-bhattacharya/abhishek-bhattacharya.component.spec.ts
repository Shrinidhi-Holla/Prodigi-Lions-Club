import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhishekBhattacharyaComponent } from './abhishek-bhattacharya.component';

describe('AbhishekBhattacharyaComponent', () => {
  let component: AbhishekBhattacharyaComponent;
  let fixture: ComponentFixture<AbhishekBhattacharyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhishekBhattacharyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbhishekBhattacharyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
