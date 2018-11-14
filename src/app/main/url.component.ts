import {Component, OnInit} from '@angular/core';
import {UrlService} from './url.service';
import {AlertService} from '../alert.service';

@Component({
  selector: 'app-url-component',
  templateUrl: './url.component.html'
})
export class UrlComponent implements OnInit {

  public url: any = '';
  public shortUrl: any = '';
  public fullCustomUrl: any = '';
  public shortCustomUrl: any = '';
  public shortCustomProcesedUrl: any = '';

  constructor(private urlService: UrlService, private alertService: AlertService) {
  }

  ngOnInit() {
  }

  createShortUrl() {
    this.urlService.processFullUrl({fullUrl: this.url}).subscribe(response => {
        this.shortUrl = 'http://localhost:8080/' + response.shortUrl;
      },
      error => this.processError(error, false)
    );
  }

  createCustomUrl() {
    this.urlService.processCustomUrl({customUrl: this.shortCustomUrl, fullUrl: this.fullCustomUrl}).subscribe(response => {
        this.shortCustomProcesedUrl = 'http://localhost:8080/' + response.shortUrl;
      },
      error => this.processError(error, true)
    );
  }

  processError(error: any, exception: boolean) {
    console.log(error);
    if (exception) {
      this.alertService.showNotification(error.error.message, 'danger');
    } else {
      this.shortUrl = '';
      this.alertService.showNotification(error.error.errors !== null ?
        error.error.errors[0].defaultMessage : '',  'danger');
    }
  }

  copyToClipboard(data: any) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (data));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
    this.alertService.showNotification('Link copied to clipboard!', 'info');
  }
}
