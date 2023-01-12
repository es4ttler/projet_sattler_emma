import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Observable, of, tap } from "rxjs";


@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

    jwtToken: String = "";
    snackBar: MatSnackBar;

    constructor(private router:Router, snackBar:MatSnackBar) { 
        this.snackBar=snackBar;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {console.log("intercepted request ... ",req);
        if (this.jwtToken != "") {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.jwtToken}`
                }
            });
        }

        return next.handle(req).pipe(tap(
            (evt: HttpEvent<any>) => {
                if (evt instanceof HttpResponse) {
                    let tab: Array<String>;
                    let enteteAuthorization =
                        evt.headers.get("Authorization");
                    if (enteteAuthorization != null) {

                        tab = enteteAuthorization.split(/Bearer\s+(.*)$/i);
                        if (tab.length > 1) {

                            this.jwtToken = tab[1];
                        }

                    }

                }
            },
            (error: HttpErrorResponse) => {
                switch (error.status) {
                    case 400:
                    case 401:this.router.navigate(["/"]);this.snackBar.open("Erreur 401 : "+error.message,"",{duration:3000});break;
                    case 404:this.router.navigate(["/"]);this.snackBar.open("Erreur 404 : "+error.message,"",{duration:3000});break;
                }
                return of(null);
            }
        ));
    }

}
