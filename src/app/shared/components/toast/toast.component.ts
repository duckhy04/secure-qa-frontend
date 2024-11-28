import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Subscription } from 'rxjs';
import { Toast } from '../../../core/models/models';
import { ToastService } from '../../../core/services/services';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  toast: Toast | null = null;
  private toastSubscription: Subscription = new Subscription();

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.toastSubscription = this.toastService.toast$.subscribe((toast) => {
      this.toast = toast;
      setTimeout(() => {
        this.toast = null;
      }, 3000);
    });
  }

  ngOnDestroy(): void {
    this.toastSubscription.unsubscribe();
  }
}
