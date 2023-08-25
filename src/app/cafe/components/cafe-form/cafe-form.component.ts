import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CafeService } from 'src/app/services/cafe.service';

@Component({
  selector: 'app-cafe-form',
  templateUrl: './cafe-form.component.html',
  styleUrls: ['./cafe-form.component.css']
})
export class CafeFormComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private cafeService: CafeService,
              private router: Router) {
    this.formGroup = formBuilder.group({
      sabor:['', Validators.required],
      quantidade:['', Validators.required],
      temperatura:['', Validators.required]
    })
}

onSubmit() {
  if (this.formGroup.valid) {
    const novoCafe = this.formGroup.value;
    this.cafeService.salvar(novoCafe).subscribe({
      next: (cafeCadastrado) => {
        this.router.navigateByUrl('/cafes/list');
      },
      error: (err) => {
        console.log('Erro ao salvar' + JSON.stringify(err));
      }
    })

  }
}

}
