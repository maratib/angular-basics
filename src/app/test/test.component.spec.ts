import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); // end beforeEach

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('test works!');
  });

  it(`should have the 'angular-basics' title`, () => {
    const test = fixture.componentInstance;
    expect(test.title).toEqual('angular-basics');
  });
});
