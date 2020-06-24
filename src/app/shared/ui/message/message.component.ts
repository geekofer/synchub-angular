import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() messageText: string;
  @Input() messageType?: string;

  constructor() {}

  ngOnInit() {}
}
