import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerDataChangesService {
  public count$ = new Subject<number>();

  public changeCount(count: number) {
    this.count$.next(count);
  }
}
