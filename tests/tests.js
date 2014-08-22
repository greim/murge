
test('murge', function() {

    deepEqual(

        murge({ a: 1 }, { b: 2 }),

        { a: 1, b: 2 }

    );

    deepEqual(

        murge({ a: 1 }, undefined, { b: 2 }),

        { a: 1, b: 2 }

    );

    deepEqual(

        murge({ a: 1 }, null, { b: 2 }),

        { a: 1, b: 2 }

    );

    deepEqual(

        murge({ a: 1 }, null, { b: 2 }, undefined, null),

        { a: 1, b: 2 }

    );

    deepEqual(

        murge({ a: 1 }, { b: { c: { d: 2 } } }),

        { a: 1, b: { c: { d: 2 } } }

    );

    deepEqual(

        murge(), {}

    );

    deepEqual(

        murge(undefined), {}

    );

    deepEqual(

        murge([]), {}

    );

    deepEqual(

        murge(true), {}

    );

    deepEqual(

        murge(null, true, [0, 1, 2], 3, { a: 1 }, function() {}, undefined, { b: 2 }),

        { a: 1, b: 2 }

    );

    function Foo(){}
    Foo.prototype.bar = 1;

    deepEqual(

        murge({}, new Foo()),

        {}

    );

});

test('murge (deep)', function() {

    var input = {

        a: 1,
        b: {

            c: {

                d: 2,

                e: ['x', 'y', { z: { w: ['k'] }}]

            }

        },

        f: null,
        g: undefined,
        h: true

    }, original = {

        a: 1,
        b: {

            c: {

                d: 2,

                e: ['x', 'y', { z: { w: ['k'] }}]

            }

        },

        f: null,
        g: undefined,
        h: true

    }, output = murge(true, input);

    input.b.c.d++;
    input.b.c.e[2].z.w = null;
    input.h = null;

    deepEqual(original, output);

    input = original;

    output = murge(true, input, { a: 2 });

    deepEqual(output.a, 2);
    deepEqual(input.a, 1);

});
