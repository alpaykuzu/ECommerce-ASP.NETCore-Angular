import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) {}

  showSpinner(spinnerNameType: SpinnerType) {
    this.spinner.show(spinnerNameType);

    setTimeout(() => {
      this.hideSpinner(spinnerNameType);
    }, 500);
  }
  hideSpinner(spinnerNameType: SpinnerType) {
    this.spinner.hide(spinnerNameType);
  }
}
export enum SpinnerType {
  BallScaleMultiple = 's1',
  Pacman = 's2',
  BallTrianglePath = 's3',
}
