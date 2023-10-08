import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiesCommentsComponent } from './recepies-comments.component';

describe('RecepiesCommentsComponent', () => {
  let component: RecepiesCommentsComponent;
  let fixture: ComponentFixture<RecepiesCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepiesCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepiesCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
