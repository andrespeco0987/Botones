import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesCitasComponent } from './botones-citas.component';

describe('BotonesCitasComponent', () => {
  let component: BotonesCitasComponent;
  let fixture: ComponentFixture<BotonesCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonesCitasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
