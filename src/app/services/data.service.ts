import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  private _getData =  new Subject<any[]>();

  constructor(private http: HttpClient) {
    if (this.getDataFromLocalStorage().length > 0) {
      console.log('[DATASERVICE] from local storage');
      setTimeout(() => {
        this._getData.next(this.getDataFromLocalStorage());
      },100);
    } else {
      console.log('[DATASERVICE] from file');
      this.getJSON().subscribe(data => {
        this._getData.next(data);
      }, error => console.log('error', error));
    }
  }

  public getData():Observable<any[]> {
    return this._getData.asObservable();
  }

  private getJSON(): Observable<any> {
    return this.http.get('../../assets/Long.json');
  }

  private getDataFromLocalStorage():any[] {
    return JSON.parse(localStorage.getItem('data') || '[]');
  }

  private storeDataToLocalStorage(data) {
    localStorage.setItem('data', JSON.stringify(data || []));
  }

}

export class Folder {
  title: string;
  createdAt: string;
  updatedAt: string;
  is_open: boolean;
}

export class File {
  fileName: string;
  fileType: string;
  createdAt: string;
  updatedAt: string;
}

export class Content {
  type: ContentType;
  content: any;
}


export enum ContentType {
  FOLDER,
  FILE
}
