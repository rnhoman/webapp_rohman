import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sa-order-form',
  templateUrl: './order-form.component.html',
})
export class OrderFormComponent implements OnInit {
  public validationOptions:any = {
    // Rules for form validation
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true
      },
      interested: {
        required: true
      },
      budget: {
        required: true
      }
    },

    // Messages for form validation
    messages: {
      name: {
        required: 'Please enter your name'
      },
      email: {
        required: 'Please enter your email address',
        email: 'Please enter a VALID email address'
      },
      phone: {
        required: 'Please enter your phone number'
      },
      interested: {
        required: 'Please select interested service'
      },
      budget: {
        required: 'Please select your budget'
      }
    },
    submitHandler: this.onSubmit

  };

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log('\n', 'submit handler for validated form', '\n\n')
  }

}
