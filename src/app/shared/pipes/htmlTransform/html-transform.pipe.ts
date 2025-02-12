import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
	name: 'htmlTransform',
  standalone:false
})
export class HtmlTransformPipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) {}

	transform(style:any) {
		return this.sanitizer.bypassSecurityTrustHtml(style);
	}
}
