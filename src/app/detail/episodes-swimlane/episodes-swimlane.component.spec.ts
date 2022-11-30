import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesSwimlaneComponent } from './episodes-swimlane.component';

describe('EpisodesSwimlaneComponent', () => {
  let component: EpisodesSwimlaneComponent;
  let fixture: ComponentFixture<EpisodesSwimlaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodesSwimlaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesSwimlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
