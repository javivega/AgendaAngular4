import { InjectionToken, ValueProvider } from '@angular/core';

//Para hacer un inyeccion de un valor necesitamos crear un token usando la clase InjectionToken
//No debemos usar como token una string, en useValue podría usar un objeto.
export const ApiUrl: InjectionToken<string> = new InjectionToken<string>('ApiUrl');

//defino el provider que coje un provide que es lo que me pedira y useValue su valor.
export const ApiUrlProvider: ValueProvider = {
    provide: ApiUrl,
    useValue: 'http://localhost:3004'
};

