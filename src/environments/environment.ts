// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  MOVIE_POPULAR_URL: 'https://api.themoviedb.org/3/movie/popular',
  MOVIE_URL: 'https://api.themoviedb.org/3/movie/',
  API_KEY: '4754c728ee4c38b18d8a3c27c3e1ba56',
  LANGUAGE: 'pt-BR',
  IMG_URL_BASE_500: 'https://image.tmdb.org/t/p/w500',
  IMG_URL_BASE: 'https://image.tmdb.org/t/p/original',
  IMG_SIZE: 'w500'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
