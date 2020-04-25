import { ErrorHandler } from '@angular/core';

export class AppErrorHander implements ErrorHandler {
    handleError(error) {
        alert('An unexpected error occured.');
        console.log(error);
    }
}