import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Toast } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  private toastSubject = new Subject<Toast>();

  toast$ = this.toastSubject.asObservable();

  showToast(message: string, type: 'success' | 'error' = 'success') {
    this.toastSubject.next({ message, type });
  }
}
