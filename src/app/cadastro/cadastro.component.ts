import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  imports: [ReactiveFormsModule]
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Altera os campos para nome, preco e descricao
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      preco: ['', [Validators.required, Validators.min(0)]],
      descricao: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      // Simula o cadastro do produto e navega para a tela de confirmação
      this.router.navigate(['/confirmacao']);
      console.log('Cadastro de Produto:', this.cadastroForm.value);
    }
  }
}
