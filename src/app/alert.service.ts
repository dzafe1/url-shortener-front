import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

declare let $: any;

@Injectable()
export class AlertService {
    constructor(private translateService: TranslateService) { }

    public success(message: string, translate: boolean = true): void {
        this.getMessageTranslation(message, translate, 'success');
    }

    public danger(message: string, translate: boolean = true): void {
        this.getMessageTranslation(message, translate, 'danger');
    }

    public warning(message: string, translate: boolean = true): void {
        this.getMessageTranslation(message, translate, 'warning');
    }

    private getMessageTranslation(message: string, translate: boolean, type: string): void {
        if (translate)
            this.translateService.get(message).subscribe((translation: string) => {
                this.showNotification(translation, type);
            });
        else
            this.showNotification(message, type);
    }

    private showNotification(message: string, type: string): void {
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
