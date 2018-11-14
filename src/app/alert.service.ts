import {Injectable} from '@angular/core';

declare let $: any;

@Injectable()
export class AlertService {
  constructor() {
  }

  public showNotification(message: string, type: string): void {
    $.notify({
        message: message
      },
      {
        type: type,
        newest_on_top: true,
        delay: 5000,
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} notify-custom-container" role="alert">' +
          '<button type="button" aria-hidden="true" class="close notify-custom" data-notify="dismiss"><span>&times;</span></button>' +
          '<span data-notify="title">{1}</span>' +
          '<span data-notify="message">{2}</span>' +
          '</div>'
      });
  }
}
