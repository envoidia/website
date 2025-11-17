Classes can be:
`abstract`
`sealed`: Equivalent to Java's `final`; there is no equivalent to Java's `sealed`
`static`: Everything contained within must be `static`
`record`: Mostly the same as Java. Can also be declared with `record class` to disambiguate from `record struct`s. todo
more detail

`this` is the same. `base` is used instead of `super`

Inheritance is much the same, but instead of `extends` or `implements`, the syntax is
`class ClassName : NameOfClassItExtends, IInterfaceItImplements`. Interface names should be prefixed with `I` to make up
for lost clarity from lack of a specific keyword

In order to call the base constructor, use `:` syntax before the constructor body

```c#
public class Foo : Bar {
	public Foo(int lorem) : base(lorem, "Ipsum", 10) {}
}
```

Classes can have primary constructors (much like records). Primary constructor fields can be used directly, or given
to [properties](./properties)

```c#
public class Foo(int lorem, string ipsum, char dolor) : Bar(lorem, ipsum) {
	public int Dolor => dolor;
}
```

When overriding, you must use the `override` keyword. Only `virtual`, `abstract`, or `override` members can be
overridden

`new` can be used to hide a member inherited from a base class

Generally, you should be using [properties](./properties) instead of fields

Also
see: [Enums](./enums), [Extensions](./extensions), [Interfaces](./interfaces), [Object Initializers](./object_initializers), [Structs](./structs)

MS docs:

- [Classes](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)
- [Records](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record)
