import { Component } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent {
  private greeting: string;
  private isShowMore: boolean;
  private msgToChild: string;
  private msgFromChild: any;

	constructor(private logger: LoggerService) {	}

  ngOnInit() {
    this.greeting = 'Angular 2';
    this.msgToChild = 'message from parent';
    this.logger.debug('应用已初始化');
  }

  receive(msg: any) {
    this.msgFromChild = msg;
    this.logger.debug(msg);
  }
}
