import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  save(): void {
    if (this.form.valid) {
      console.log('✅ Salvando usuário:', this.form.value);
    } else {
      console.warn('❌ Formulário inválido');
      this.form.markAllAsTouched();
    }
  }

  resetForm(): void {
    this.form.reset();
    console.log('🔄 Formulário resetado');
  }
}
