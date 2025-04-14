import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilePage } from './profile.page';

describe('MyComponent', () => {
  let component: ProfilePage;
  let fixture: ComponentFixture<ProfilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePage]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();// run ngOninit

  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ProfilePage);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should increment count when button clicked', () => {
  //   const button = fixture.nativeElement.querySelector('button');
  //   button.click();
  //   fixture.detectChanges(); // Cập nhật UI
  //   expect(fixture.nativeElement.querySelector('p').textContent).toContain('Count: 1');
  // });
});
