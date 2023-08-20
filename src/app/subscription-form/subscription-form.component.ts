import { Component } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../service/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {
  isEmailError: boolean;
  isSubscribe: boolean = false;
    constructor(private subService:SubscribersService){}


  onSubmit(value: Sub) {
    const data: Sub = {
      name: value.name,
      email:value.email
    }

    this.subService.checkDeplicateEmail(data.email).subscribe({
      next: (val) => {
        if (val.empty) {
          this.subService.addSubscriber(data);
          this.isEmailError = false;
          this.isSubscribe = true;
        } else {
          this.isEmailError=true
        }

      }
    })
  }

}
