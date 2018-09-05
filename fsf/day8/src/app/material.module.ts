import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';

const MATERIAL = [ MatButtonModule, 
    MatIconModule, MatInputModule, 
    MatToolbarModule, MatRadioModule,
    MatDatepickerModule, MatCardModule,
    MatFormFieldModule ];

@NgModule({
    imports: MATERIAL,
    exports: MATERIAL
})

export class MaterialModule { }
