import { CommonModule, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface ContactInterface {
  firstName: string
}

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  data: string[] = ["Piotr", "Anna", "Adam"];

  contactName?: ContactInterface = {firstName: ''};

  modIndex: number = -1;

  ngOnInit() {
    this.contactName = {
      firstName: ''
    }
  }

  setNewName(data: NgForm) {

    if(this.modIndex >= 0) {
      this.data[this.modIndex] = data.value.firstname;
      this.modIndex = -1;
      data.reset();
      return;
    }

    console.log(data.value.firstname);
    const imie: string = data.value.firstname;

    this.data.push(imie);

    console.log(this.data);
  }

  delElem(i: number): void {
    this.data.splice(i, 1);
  }

  modElem(i: number): void {
    const name = this.data[i];
    this.modIndex = i;
    this.contactName = {
      firstName: name
    }
  }


}
