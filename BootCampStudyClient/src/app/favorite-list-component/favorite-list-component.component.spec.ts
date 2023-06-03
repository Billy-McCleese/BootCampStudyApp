import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteListComponentComponent } from './favorite-list-component.component';

describe('FavoriteListComponentComponent', () => {
  let component: FavoriteListComponentComponent;
  let fixture: ComponentFixture<FavoriteListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteListComponentComponent]
    });
    fixture = TestBed.createComponent(FavoriteListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
