
// ******************
// Attribute Directive 
// ********************
import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';
@Directive({
  selector: '[appBetterHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  /**
   * This is meant to accept dynamic values for the directive.
   * Say we wanted custom values to be given for mouseenter and mouseleave events.
   */
  /**
   * The following line in this comment is an example using Directive's selector as the alias for the @Input.
   * @Input('appBetterHighlight') highlightColor: string = 'blue';
   */
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  /**
   * Initializing value so that it does not throw an error
   */
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, `background-color`, `blue`);
    /**
     * `this.renderer.setStyle()`
     * This is a hleper method that allows us to set style on DOM elements.
     */
    // Above line of code containing setStyle is commented out to demonstrate
    // the dynamic allocation of the value.
    this.backgroundColor = this.defaultColor;
    /**
     * The value passed during the directive call when detected on the element
     * is detected here and intialized with the dynamic value.
     */
  }
  /**
   * We need to listen to events occuring on the element that the Directive sits on.
   * In order to accomplish this, we make use of `HostListner`.
   */
  @HostListener(
    'mouseenter' /* This is the event that triggers HostListner,
  It is specified as an argument.*/
  )
  mouseover(eventData: Event) {
    /*
     * improved implentation of better-highlight.directive.ts
     */
    // this.renderer.setStyle(this.elRef.nativeElement, `background-color`, `blue`);
    /*
  Above line of code represents the method of implementation using renderer2,
  it is commented out to highlight the next method of implementation.
  The following line after this comment shows the implementation of
  HostListener for the method that employs HostBinding()
  */
    this.backgroundColor = this.highlightColor;
  }
  @HostListener(
    'mouseleave' /* This is the event that triggers HostListner,
  It is specified as an argument.*/
  )
  mouseleave(eventData: Event) {
    /*
     * improved implentation of better-highlight.directive.ts
     */
    // this.renderer.setStyle(this.elRef.nativeElement, `background-color`, `transparent`);
    /*
  Above line of code represents the method of implementation using renderer2,
  it is commented out to highlight the next method of implementation.
  The following line after this comment shows the implementation of
  HostListener for the method that employs HostBinding()
  */
    this.backgroundColor = this.defaultColor;
  }
}
