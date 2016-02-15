# gulp-imba
> Gulp wrapper for the [Imba](http://imba.io/home) compiler.

[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]

## Install

```a
npm install --save-dev gulp-imba
```

## Example

```js
var gulp = require('gulp');
var imba = require('gulp-imba');

gulp.task('default', function() {
    gulp.src('src/*.imba')
        .pipe(imba())
        .pipe(gulp.dest('dist'));
});
```

## License

MIT © [Luke Edwards](https://lukeed.com) et [al][contributors]

[contributors]: https://github.com/lukeed/gulp-imba/graphs/contributors
[releases]:     https://github.com/lukeed/gulp-imba/releases
[npm-pkg-link]: https://www.npmjs.org/package/gulp-imba
[npm-ver-link]: https://img.shields.io/npm/v/gulp-imba.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/gulp-imba.svg?style=flat-square
[travis-link]:  https://travis-ci.org/lukeed/gulp-imba
[travis-badge]: http://img.shields.io/travis/lukeed/gulp-imba.svg?style=flat-square
