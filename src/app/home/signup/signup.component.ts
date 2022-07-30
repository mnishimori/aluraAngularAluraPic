import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {lowerCaseValidator} from '../../shared/validators/lower-case.validator';
import {UserNotTakenValidatorService} from './user-not-taken-validator.service';
import {NewUser} from './new-user';
import {SignupService} from './signup.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignupService,
    private router: Router) {
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

  signUp(): void {
    const user = this.signUpForm.getRawValue() as NewUser;
    this.signUpService.signUp(user)
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }

}
