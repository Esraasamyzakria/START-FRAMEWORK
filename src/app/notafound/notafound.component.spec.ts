import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotafoundComponent } from './notafound.component';

describe('NotafoundComponent', () => {
  let component: NotafoundComponent;
  let fixture: ComponentFixture<NotafoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotafoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotafoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
