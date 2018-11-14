import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-parameters-main',
    templateUrl: './mp-main.component.html'
})
export class MlmParametersMainComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { 
        if (this.router.url == '/parameters')
            this.router.navigate(['parameters/list']);
    }
}
