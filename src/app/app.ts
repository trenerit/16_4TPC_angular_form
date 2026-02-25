import { CommonModule } from '@angular/common';
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
  char = '+';
  result: number | null = null;
  private readonly ops: Record<string, (a: number, b: number) => number | null> = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (b === 0 ? null : a / b),
  };

  calc(data: NgForm): void {
    const char = data.value.char;
    const num1 = Number(data.value.num1);
    const num2 = Number(data.value.num2);

    this.result = this.ops[char]?.(num1, num2) ?? null;
  }
}
