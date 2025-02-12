import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorComponent } from '../components/editor/editor.component';
import { HtmlTransformPipe } from '../pipes/htmlTransform/html-transform.pipe';

@NgModule({
	declarations: [
		EditorComponent,
    HtmlTransformPipe
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		CKEditorModule,
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		EditorComponent,
		CKEditorModule,
    HtmlTransformPipe
	],
})
export class SharedModule {}
