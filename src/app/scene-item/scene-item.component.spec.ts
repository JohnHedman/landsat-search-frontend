import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneItemComponent } from './scene-item.component';

describe('SceneItemComponent', () => {
  let component: SceneItemComponent;
  let fixture: ComponentFixture<SceneItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
