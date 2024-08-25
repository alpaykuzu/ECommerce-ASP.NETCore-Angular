import { Component, OnInit  } from '@angular/core';
import { AuthService } from './services/common/auth.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(public authService: AuthService, private toastrService: CustomToastrService, private router:Router){
    authService.identityCheck()
  }

  signOut(){
    this.router.navigate([''])
    localStorage.removeItem("accessToken");
    this.authService.identityCheck();
    this.toastrService.message("Oturum kapatılmıştır!", "Oturum Kapatıldı", {
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.TopRight
    })
  }
}
