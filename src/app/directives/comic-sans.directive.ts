import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[comicSans]'
})
export class ComicSansDirective {
    constructor(private eleRef: ElementRef) {
        eleRef.nativeElement.style.fontFamily = "Comic Sans MS";
    }
}