import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  
  public emitter(target, event) {
    
    return new Observable((observer) => {

      const handler = (e) => {
        observer.next(e)
      }

      target.addEventListener(event, handler)

      return () => {
        target.removeEventListener(event, handler)
      }
    })
  }

  public activator(target:HTMLElement) {
    return new Observable((obvsever) => {

      const handler = (e) => {
        if (e.target.tagName == "I" || e.target.tagName == "A") {
          
          if (e.target.tagName == 'I') {
            obvsever.next(e.target.parentElement)
          } else {
            obvsever.next(e.target)
          }
        }

        
      }

      target.addEventListener('click', handler);

      return () => {
        target.removeEventListener('click',handler)
      }
    })
  }

}
