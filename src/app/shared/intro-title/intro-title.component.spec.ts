import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroTitleComponent } from './intro-title.component';

describe('IntroTitleComponent', () => {
  let component: IntroTitleComponent;
  let fixture: ComponentFixture<IntroTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
