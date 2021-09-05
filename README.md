<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# enumerablePropertiesIn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Return an array of an object's own and inherited enumerable property names and [symbols][@stdlib/symbol/ctor].

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-enumerable-properties-in
```

</section>

<section class="usage">

## Usage

```javascript
var enumerablePropertiesIn = require( '@stdlib/utils-enumerable-properties-in' );
```

#### enumerablePropertiesIn( obj )

Returns an `array` of an object's own and inherited enumerable property names and [symbols][@stdlib/symbol/ctor].

```javascript
var obj = {
    'a': 'a'
};

var props = enumerablePropertiesIn( obj );
// returns [ 'a' ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
var Symbol = require( '@stdlib/symbol-ctor' );
var enumerablePropertiesIn = require( '@stdlib/utils-enumerable-properties-in' );

var hasSymbols;
var props;
var obj;

hasSymbols = hasSymbolSupport();

function Foo() {
    this.a = 'b';
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'b';
    }
    return this;
}

Foo.prototype.foo = 'bar';
if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'foo' ) ] = 'bar';
}

obj = new Foo();
props = enumerablePropertiesIn( obj );

console.log( props );
// e.g., => [ 'a', 'foo', ... ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-enumerable-properties-in.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-enumerable-properties-in

[test-image]: https://github.com/stdlib-js/utils-enumerable-properties-in/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-enumerable-properties-in/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-enumerable-properties-in/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-enumerable-properties-in?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-enumerable-properties-in.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-enumerable-properties-in/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-enumerable-properties-in/main/LICENSE

[@stdlib/symbol/ctor]: https://github.com/stdlib-js/symbol-ctor

</section>

<!-- /.links -->
