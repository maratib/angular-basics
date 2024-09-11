import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-iframe',
  standalone: true,
  imports: [],
  template: `
    <h1>IFrame</h1>
    <iframe
      #iFrame
      src="https://www.upwork.com/search/jobs/?q=tailwind&sort=recency"
      (load)="onLoadDone(iFrame)"
      target="_blank"
      width="100%"
      height="500px"
    ></iframe>
    <div #appText>Hello</div>
  `,
})
export class IframeComponent {
  @ViewChild('iFrame', { static: true })
  iFrame!: ElementRef<HTMLIFrameElement>;

  @ViewChild('appText', { static: true })
  appText!: ElementRef<HTMLDialogElement>;

  onLoadDone(_container: HTMLElement) {
    console.log('IFrame loaded');
    const base64String =
      this.iFrame.nativeElement.contentWindow?.document.body.innerHTML;
    console.log(base64String);
    this.appText.nativeElement.innerHTML = base64String!;
    // console.log(_container.innerHTML);
    // const myIframe = document.querySelector('#my-iframe');
    // myIframe.
    // console.log(myIframe.nativeElement.contentDocument.body.innerHT‌​ML);
  }
}
