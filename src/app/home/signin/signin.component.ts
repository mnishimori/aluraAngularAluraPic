import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';
import {Router} from '@angular/router';
import {PlatformDetectorService} from '../../core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platFormDetectorService: PlatformDetectorService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    const userName: string = this.loginForm.get('userName').value;
    const password: string = this.loginForm.get('password').value;

    this.authService.authenticate(
      userName, password)
      .subscribe(() => this.router.navigate(['user', userName]),
        error => {
        console.log(error);
        this.loginForm.reset();
        if (this.platFormDetectorService.isPlatFormBrowser()){
          this.userNameInput.nativeElement.focus();
        }
      });
  }

}
