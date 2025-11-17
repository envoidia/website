You can overload an operator to give it a unique definition for a given class or struct. This way, Java's
`a.add(b).multiply(c).subtract(d)`-style code is avoided

```c#
public struct Vector2 {
	float X;
	float Y;
	
	public Vector2(float x, float y) {  
		this.X = x;  
		this.Y = y;  
	}
	
	public static Vector2 operator +(Vector2 value1, Vector2 value2) {  
		value1.X += value2.X;  
		value1.Y += value2.Y;  
		return value1;  
	}
}

Vector2 a = new(0.3f, 0.6f);
Vector2 b = new (0.4f, 0.8f);
Console.WriteLine(a + b); // Outputs {X:0.70000005 Y:1.4000001}
```

When defining an operator overload, be certain that it is actually necessary and clearly is performing the operation
expected of the operator

Most programmers will never create their own operator overload, but it's important to understand how the ones in
libraries you're using work

Some operators must be overloaded in sets. For instance, if overloading `>`, you must also overload `<`

Overloading `a & b` and `a | b` also overloads `a && b` and `a || b` implicitly

You can overload `true` and `false` to allow a type to be truth-checked

Non-overloadable operators:
Compound assignments: Automatically generated
`a && b`, `a || b`: Automatically generated when you overload `true`, `false`, `a & b`, and `a | b`
`a[i]`, `a?[i]`: Define an [indexer](./indexers)
`(type) a`: Define a [type conversion](./type-testing_and_casting)
`^a`, `a = b`, `a.b`, `a?.b`, `c ? t : f`, `a ?? b`, `??= b`, `a..b`, `a->b`, `=>`, `f(a)`, `as`, `await`, `checked`,
`unchecked`, `default`, `delegate`, `is`, `nameof`, `new`, `sizeof`, `stackalloc`, `switch`, `typeof`, `with`

MS docs:

- [Operator Overloading](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/operator-overloading)
