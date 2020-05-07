import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() customer: any;

  ngOnInit(): void {
  }

  close() {
    const deleteBtn = document.querySelector('.delete');

    deleteBtn.parentElement.parentElement.remove();
    console.log(deleteBtn.parentElement.parentElement)
  }

}
