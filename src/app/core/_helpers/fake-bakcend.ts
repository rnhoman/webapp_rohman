import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let testUser = { id: 1, username: 'test', password: 'test', firstName: 'test', lastName: 'test' };

        return of(null).pipe(mergeMap(() => {
            if(req.url.endsWith('/users/authenticate') && req.method === "POST") {
                if (req.body.username === testUser.username && req.body.password === testUser.password) {
                    let body = {
                        id : testUser.id,
                        username: testUser.username,
                        firstName: testUser.firstName,
                        lastName: testUser.lastName,
                        token: 'fake-jwt-token'
                    };
                    return of(new HttpResponse({ status: 200, body }));
                } else {
                    return throwError({ error : {
                        message: "Username & Password Incorrect"
                    }});
                }
            }

            if(req.url.endsWith('/users') && req.method === "GET") {
                if(req.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({status: 200, body: [testUser]}));
                } else {
                    return throwError({error : {
                        message: 'Unauthorized'
                    }});
                }
            }

            return next.handle(req);
        }))

        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }
}

export let fakebackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true,
}