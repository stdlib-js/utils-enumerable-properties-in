/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var indexOf = require( '@stdlib/utils-index-of' );
var defineProperty = require( '@stdlib/utils-define-property' );
var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
var Symbol = require( '@stdlib/symbol-ctor' );
var enumerablePropertiesIn = require( './../lib' );


// VARIABLES //

var hasSymbols = hasSymbolSupport();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof enumerablePropertiesIn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of an object\'s own and inherited enumerable property names and symbols', function test( t ) {
	var expected;
	var symbols;
	var actual;
	var obj;
	var idx;
	var i;

	if ( hasSymbols ) {
		symbols = [
			Symbol( 'a' ),
			Symbol( 'b' ),
			Symbol( 'c' )
		];
	} else {
		symbols = [];
	}

	function Foo() {
		this.a = 'a';
		defineProperty( this, 'b', {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'b'
		});
		if ( hasSymbols ) {
			this[ symbols[ 0 ] ] = 'a';
			defineProperty( this, symbols[ 1 ], {
				'configurable': false,
				'enumerable': false,
				'writable': true,
				'value': 'b'
			});
		}
		return this;
	}

	Foo.prototype.b = 'b';
	Foo.prototype.c = 'c';
	defineProperty( Foo.prototype, 'd', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'd'
	});
	if ( hasSymbols ) {
		Foo.prototype[ symbols[ 1 ] ] = 'b';
		defineProperty( Foo.prototype, symbols[ 2 ], {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'c'
		});
	}

	obj = new Foo();

	expected = [ 'a', 'c' ];
	if ( hasSymbols ) {
		expected.push( symbols[ 0 ] );
	}
	actual = enumerablePropertiesIn( obj );

	t.strictEqual( actual.length, expected.length, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property: '+expected[i].toString() );
	}
	t.end();
});

tape( 'the function returns an array of an object\'s own and inherited enumerable property names and symbols (mock)', function test( t ) {
	var enumerablePropertiesIn;
	var expected;
	var symbols;
	var actual;
	var obj;
	var idx;
	var i;

	enumerablePropertiesIn = proxyquire( './../lib/main.js', {
		'@stdlib/utils-property-symbols': propertySymbols
	});

	symbols = [ '__a__', '__b__', '__c__' ];

	function Foo() {
		this.a = 'a';
		defineProperty( this, 'b', {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'b'
		});
		this[ symbols[ 0 ] ] = 'a';
		defineProperty( this, symbols[ 1 ], {
			'configurable': false,
			'enumerable': false,
			'writable': true,
			'value': 'b'
		});
		return this;
	}

	Foo.prototype.b = 'b';
	Foo.prototype.c = 'c';
	defineProperty( Foo.prototype, 'd', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'd'
	});
	Foo.prototype[ symbols[ 1 ] ] = 'b';
	defineProperty( Foo.prototype, symbols[ 2 ], {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': 'c'
	});

	obj = new Foo();

	expected = [ 'a', 'c', symbols[ 0 ] ];
	actual = enumerablePropertiesIn( obj );

	t.strictEqual( actual.length, expected.length, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		idx = indexOf( actual, expected[ i ] );
		t.strictEqual( idx !== -1, true, 'contains property: '+expected[i].toString() );
	}
	t.end();

	function propertySymbols( value ) {
		if ( value === obj ) {
			return symbols.slice( 0, 2 );
		}
		if ( value === Foo.prototype ) {
			return symbols.slice( 1 );
		}
		return [];
	}
});

tape( 'the function returns an empty array if provided `null` or `undefined`', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		void 0,
		null
	];
	expected = [];

	for ( i = 0; i < values.length; i++ ) {
		actual = enumerablePropertiesIn( values[ i ] );
		t.deepEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
