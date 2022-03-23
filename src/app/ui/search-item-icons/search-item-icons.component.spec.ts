import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemIconsComponent } from './search-item-icons.component';

describe('SearchItemIconsComponent', () => {
  let component: SearchItemIconsComponent;
  let fixture: ComponentFixture<SearchItemIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchItemIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchItemIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
