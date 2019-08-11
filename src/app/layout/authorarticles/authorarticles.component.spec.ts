import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorarticlesComponent } from './authorarticles.component';

describe('AuthorarticlesComponent', () => {
  let component: AuthorarticlesComponent;
  let fixture: ComponentFixture<AuthorarticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorarticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
