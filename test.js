/*global QUnit:true, module:true, test:true, asyncTest:true, expect:true*/
/*global start:true, stop:true ok:true, equal:true, notEqual:true, deepEqual:true*/
/*global notDeepEqual:true, strictEqual:true, notStrictEqual:true, raises:true*/

/*global myFunc:true*/

module('module', {
  setup:    function(){},
  teardown: function(){}
});

test('myFunc', function(){
  equal('OK', myFunc());
});


// some of the assertion you can use from qunit
// ok(truthy[, messag])
// equal(actual, expected[, message])
// deepEqual(actual, expected[, message])
//
// notDeppEqual()
// notEqual()

