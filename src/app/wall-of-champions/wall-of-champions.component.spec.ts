import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallOfChampionsComponent } from './wall-of-champions.component';

describe('WallOfChampionsComponent', () => {
  let component: WallOfChampionsComponent;
  let fixture: ComponentFixture<WallOfChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallOfChampionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallOfChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
