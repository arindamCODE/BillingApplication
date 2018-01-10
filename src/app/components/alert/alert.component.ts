import { Alert, AlertType } from './../../models/alert';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  timer: any;
  display: boolean;
  alerts: Alert[] = [];

    constructor(private alertService: AlertService) {
      this.display = true;
    }

    ngOnInit() {
        this.alertService.getAlert().subscribe((alert: Alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }

            // add alert to array
            this.alerts.push(alert);
            this.hide();
        });

    }


    removeAlert(alert: Alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }

    cssClass(alert: Alert) {
        if (!alert) {
            return;
        }

        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';

        }
    }

    hide() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.display = false;
      }, 3000);
    }
}
