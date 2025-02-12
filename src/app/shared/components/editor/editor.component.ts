import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@assets/ckeditor/ckeditor';
// import * as ClassicEditor from '@assets/ckeditor/ckeditor';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { Subject } from 'rxjs/internal/Subject';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/modules/shared.module';
@Component({
	selector: 'app-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss'],
  standalone:false,
  // imports:[CommonModule, SharedModule]
})
export class EditorComponent implements OnInit, AfterContentChecked {
	@Input() data: any;

	dataChanged: Subject<string> = new Subject<string>();

	public config?: CKEditorConfig | any;
	public editor: any;
	private oldLang!: string;

	constructor() {
		this.setDefaultValue();
	}

	ngOnInit(): void {}

	ngAfterContentChecked(): void {
		// if (this.lang.currentLang !== this.oldLang) {
		// 	this.editor = null;
		// 	const newFullLang = this.lang.currentLang;
		// 	const newLang: string = this.getFirstLang(newFullLang);
		// 	this.config = {
		// 		...this.config,
		// 		language: { ui: newLang.toLowerCase() },
		// 	};
		// 	this.editor = ClassicEditor;
		// 	this.oldLang = newFullLang;
		// }

    const newLang: string = this.getFirstLang('en');
			this.config = {
				...this.config,
				language: { ui: newLang.toLowerCase() },
			};
			this.editor = ClassicEditor;
			this.oldLang = 'en';
	}

	public onChange({ editor }: ChangeEvent) {
		if (this.dataChanged.observers.length === 0) {
			this.dataChanged
				.pipe(debounceTime(700), distinctUntilChanged())
				.subscribe((term) => {
					this.data.content = term;
				});
		}

		this.dataChanged.next(editor.getData());
	}

	private getFirstLang(lang: string): string {
		return 'en';
	}

	private setDefaultValue() {
		this.editor = ClassicEditor;
		const newLang: string = this.getFirstLang("en");

		this.config = {
			language: { ui: newLang.toLowerCase() },
			removePlugins: ['MediaEmbed'],
			htmlEditorConfig: {
				mediaEmbed: {
					previewsInData: true,
				},
			},
			fontColor: {
				colors: [
					{
						color: '#000000',
						label: 'Black',
					},
					{
						color: '#4d4d4d',
						label: 'Dim grey',
					},
					{
						color: '#999999',
						label: 'Grey',
					},
					{
						color: '#e6e6e6',
						label: 'Light grey',
					},
					{
						color: '#ffffff',
						label: 'White',
					},
					{
						color: '#e64c4c',
						label: 'Red',
					},
					{
						color: '#e6994c',
						label: 'Orange',
					},
					{
						color: '#e6e64c',
						label: 'Yellow',
					},
					{
						color: '#99e64c',
						label: 'Light green',
					},
					{
						color: '#4ce64c',
						label: 'Green',
					},
					{
						color: '#4be699',
						label: 'Aquamarine',
					},
					{
						color: '#4be6e6',
						label: 'Turquoise',
					},
					{
						color: '#4c99e6',
						label: 'Light blue',
					},
					{
						color: '#4c4de6',
						label: 'Blue',
					},
					{
						color: '#994ce6',
						label: 'Purple',
					},
					{
						color: '#00994e',
						label: 'Lục đậm',
					},
					{
						color: '#2fb04a',
						label: 'Xanh tươi',
					},
					{
						color: '#6cbd45',
						label: 'Xanh sáng',
					},
					{
						color: '#00a850',
						label: 'Xanh',
					},
					{
						color: '#CFF4D2',
						label: 'Pastel',
					},
					{
						color: '#042956',
						label: 'Sapphire',
					},
					{
						color: '#0F4C81',
						label: 'Classic Blue',
					},
					{
						color: '#236899',
						label: 'Denim',
					},
					{
						color: '#F5A72C',
						label: 'Lightning Yellow',
					},
					{
						color: '#D26E2A',
						label: 'Gold Drop',
					},
					{
						color: '#F7C668',
						label: 'Golden Sand',
					},
					{
						color: '#F79489',
						label: 'Apricot',
					},
					{
						color: '#FADCD9',
						label: 'Azalea',
					},
					{
						color: '#EEB2ED',
						label: 'Light Orchid',
					},
					{
						color: '#FFD0EA',
						label: 'Pink Lace',
					},
					{
						color: '#F04393',
						label: 'Hồng đậm',
					},
					{
						color: '#851C15',
						label: 'Cherrywood',
					},
					{
						color: '#D83E38',
						label: 'Brick red',
					},
				],
			},
			fontBackgroundColor: {
				colors: [
					{
						color: '#000000',
						label: 'Black',
					},
					{
						color: '#4d4d4d',
						label: 'Dim grey',
					},
					{
						color: '#999999',
						label: 'Grey',
					},
					{
						color: '#e6e6e6',
						label: 'Light grey',
					},
					{
						color: '#ffffff',
						label: 'White',
					},
					{
						color: '#e64c4c',
						label: 'Red',
					},
					{
						color: '#e6994c',
						label: 'Orange',
					},
					{
						color: '#e6e64c',
						label: 'Yellow',
					},
					{
						color: '#99e64c',
						label: 'Light green',
					},
					{
						color: '#4ce64c',
						label: 'Green',
					},
					{
						color: '#4be699',
						label: 'Aquamarine',
					},
					{
						color: '#4be6e6',
						label: 'Turquoise',
					},
					{
						color: '#4c99e6',
						label: 'Light blue',
					},
					{
						color: '#4c4de6',
						label: 'Blue',
					},
					{
						color: '#994ce6',
						label: 'Purple',
					},
					{
						color: '#00994e',
						label: 'Lục đậm',
					},
					{
						color: '#2fb04a',
						label: 'Xanh tươi',
					},
					{
						color: '#6cbd45',
						label: 'Xanh sáng',
					},
					{
						color: '#00a850',
						label: 'Xanh',
					},
					{
						color: '#CFF4D2',
						label: 'Pastel',
					},
					{
						color: '#042956',
						label: 'Sapphire',
					},
					{
						color: '#0F4C81',
						label: 'Classic Blue',
					},
					{
						color: '#236899',
						label: 'Denim',
					},
					{
						color: '#F5A72C',
						label: 'Lightning Yellow',
					},
					{
						color: '#D26E2A',
						label: 'Gold Drop',
					},
					{
						color: '#F7C668',
						label: 'Golden Sand',
					},
					{
						color: '#F79489',
						label: 'Apricot',
					},
					{
						color: '#FADCD9',
						label: 'Azalea',
					},
					{
						color: '#EEB2ED',
						label: 'Light Orchid',
					},
					{
						color: '#FFD0EA',
						label: 'Pink Lace',
					},
					{
						color: '#F04393',
						label: 'Hồng đậm',
					},
					{
						color: '#851C15',
						label: 'Cherrywood',
					},
					{
						color: '#D83E38',
						label: 'Brick red',
					},
				],
			},
			link: {
				addTargetToExternalLinks: true,
			},
		};
	}
}
