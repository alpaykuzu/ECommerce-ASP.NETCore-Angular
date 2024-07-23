import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogModule } from 'src/app/dialogs/dialog.module';
@NgModule({
  declarations: [
    FileUploadComponent,
  ],
  imports: [
    CommonModule,
    NgxFileDropModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DialogModule
  ],
  exports: [
    FileUploadComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FileUploadModule { }
