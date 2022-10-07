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

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an array of an object's own and inherited enumerable property names and [symbols][@stdlib/symbol/ctor].



<section class="usage">

## Usage

```javascript
import enumerablePropertiesIn from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-enumerable-properties-in@deno/mod.js';
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
import hasSymbolSupport from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-symbol-support@deno/mod.js';
import Symbol from 'https://cdn.jsdelivr.net/gh/stdlib-js/symbol-ctor@deno/mod.js';
import enumerablePropertiesIn from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-enumerable-properties-in@deno/mod.js';

var hasSymbols = hasSymbolSupport();

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

var obj = new Foo();
var props = enumerablePropertiesIn( obj );
// e.g., returns [ 'a', 'foo', ... ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/enumerable-properties`][@stdlib/utils/enumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/enumerable-property-symbols-in`][@stdlib/utils/enumerable-property-symbols-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable symbol properties.</span>
-   <span class="package-name">[`@stdlib/utils/inherited-enumerable-properties`][@stdlib/utils/inherited-enumerable-properties]</span><span class="delimiter">: </span><span class="description">return an array of an object's inherited enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/keys-in`][@stdlib/utils/keys-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/nonenumerable-properties-in`][@stdlib/utils/nonenumerable-properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited non-enumerable property names and symbols.</span>
-   <span class="package-name">[`@stdlib/utils/properties-in`][@stdlib/utils/properties-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited property names and symbols.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-enumerable-properties-in.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-enumerable-properties-in

[test-image]: https://github.com/stdlib-js/utils-enumerable-properties-in/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-enumerable-properties-in/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-enumerable-properties-in/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-enumerable-properties-in?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-enumerable-properties-in.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-enumerable-properties-in/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-enumerable-properties-in/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-enumerable-properties-in/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-enumerable-properties-in/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-enumerable-properties-in/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-enumerable-properties-in/main/LICENSE

[@stdlib/symbol/ctor]: https://github.com/stdlib-js/symbol-ctor/tree/deno

<!-- <related-links> -->

[@stdlib/utils/enumerable-properties]: https://github.com/stdlib-js/utils-enumerable-properties/tree/deno

[@stdlib/utils/enumerable-property-symbols-in]: https://github.com/stdlib-js/utils-enumerable-property-symbols-in/tree/deno

[@stdlib/utils/inherited-enumerable-properties]: https://github.com/stdlib-js/utils-inherited-enumerable-properties/tree/deno

[@stdlib/utils/keys-in]: https://github.com/stdlib-js/utils-keys-in/tree/deno

[@stdlib/utils/nonenumerable-properties-in]: https://github.com/stdlib-js/utils-nonenumerable-properties-in/tree/deno

[@stdlib/utils/properties-in]: https://github.com/stdlib-js/utils-properties-in/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
