import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {lowerCaseValidator} from '../../shared/validators/lower-case.validator';
import {UserNotTakenValidatorService} from './user-not-taken-validator.service';
import {NewUser} from './new-user';
import {SignupService} from './signup.service';
import {Router} from '@angular/router';
import {PlatformDetectorService} from '../../core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signup.component.html',
  providers: [ UserNotTakenValidatorService ]
})
export class SignupComponent implements OnInit, AfterViewInit {

  signUpForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private builder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignupService,
    private router: Router,
    private platFormDetectorService: PlatformDetectorService) {
  }

  ngOnInit(): void {
    this.signUpForm = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)]],
      userName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        lowerCaseValidator ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14)]]
    });
  }

  ngAfterViewInit(): void {
    if (this.platFormDetectorService.isPlatFormBrowser()) {
      if (this.emailInput && this.emailInput.nativeElement) {
        this.emailInput.nativeElement.focus();
      }
    }
  }

  signUp(): void {
    const user = this.signUpForm.getRawValue() as NewUser;
    this.signUpService.signUp(user)
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }

}
