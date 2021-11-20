import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
  
  title = 'angularapp';
  name: String ='';
  email: String ='';
  phoneNumber: String='';
  image: String='../assets/images.jpeg';
  contacts :Array<any> = [];

  addContacts(){
    if(this.name && this.email && (this.phoneNumber&& this.phoneNumber.length>9)) {
      console.log("FIrst");
      this.contacts.push({
        name: this.name,
        email:this.email,
        phoneNumber: this.phoneNumber,
        image: this.image
      })
    }
    console.log(this.contacts);
  }
  onFileSelected(event) {
    if(event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event1: any) => {
        console.log(event1,"event1");
        this.image =event1.target.result;
      }
    }

  }
}

