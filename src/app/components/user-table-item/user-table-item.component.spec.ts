import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableItemComponent } from './user-table-item.component';

describe('UserTableItemComponent', () => {
  let component: UserTableItemComponent;
  let fixture: ComponentFixture<UserTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTableItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
