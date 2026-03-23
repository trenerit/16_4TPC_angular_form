import { CommonModule, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  data: string[] = ["Piotr", "Anna", "Adam"];

  setNewName(data: NgForm) {
    console.log(data.value.firstname);
    const imie: string = data.value.firstname;

    this.data.push(imie);

    console.log(this.data);
  }

  delElem(i: number): void {
    this.data.splice(i, 1);
  }

  modElem(i: number): void {
    
  }


}
