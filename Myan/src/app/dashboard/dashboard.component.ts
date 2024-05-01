import { Component, OnInit } from '@angular/core';
import confetti from 'canvas-confetti';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  word: string[] = ["M","Y","A","N"];
  
  constructor() {alert("Myan please tilt your phone horizontally, and enable destop mode..or better use lappy")}

  ngOnInit(): void {
    
    setInterval(() => {
      this.celebrate()
    }, 1000); // 2000 milliseconds = 2 seconds
    setInterval(() => {
      this.toggleLetter(2); 
      this.toggleLetter(3); // Call toggleLetter method with index 2 after every 2 seconds
    }, 1500); // 2000 milliseconds = 2 seconds
  }

  
  visibleLetters: boolean[] = [true, true, false, false]; // Array to track visibility of letters
  celebrate() {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 }
    });
  }
  toggleLetter(index: number) {
    if(index>1){
    this.visibleLetters[index] = !this.visibleLetters[index]; // Toggle visibility of letter at index
  }

}


}
