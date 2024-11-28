import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { ButtonComponent } from "./components/button/button.component";
import { ToastComponent } from "./components/toast/toast.component";

export const SharedModule = [
    // Modules
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,

    // Components
    ButtonComponent,
    ToastComponent,
]