import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
      /**
       * space between "if" and "(!condition)" is VERY VERY IMPORTANT.
       * `this.vcRef.createEmbeddedView(this.templateRef);`
       * Creates an embedded view inside the ViewContainer.
       * We pass the reference to the template of type `TemplateRef<any>`.
       * This helps the Angular understand which template inside the document
       * do we need to modify.
       */
    } else {
      this.vcRef.clear();
      /**
       * We call this to remove everything from this space in the DOM.
       */
    }
  }
  /**
   * In order to get access to the template we need to get access to the template
   * and the place where it needs to be injected in the document, we need to use
   * two make use of two objects from @angular/core, they are:
   * 1. TemplateRef
   * 2. ViewContainerRef
   */
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
