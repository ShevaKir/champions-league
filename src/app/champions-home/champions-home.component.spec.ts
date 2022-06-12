import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsHomeComponent } from './champions-home.component';

describe('ChampionsHomeComponent', () => {
  let component: ChampionsHomeComponent;
  let fixture: ComponentFixture<ChampionsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
