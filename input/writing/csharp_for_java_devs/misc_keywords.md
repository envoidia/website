This page details keywords that don't fit in any other page

Access:
- `public`, `private`, `void`: Same as Java
- `protected`: Can be accessed from the containing class or any derived from it
- `internal`: Can be accessed from the same assembly (package); the same as Java's default access
- `protected internal`: Can be accessed from the current assembly or any type derived from the current class
- `private protected`: Can be accessed from the containing class or a type in the current assembly derived from the current class
- `file`: Can only be accessed from the current source file

Mutability:
- `readonly`: Equivalent to Java's `final`
- `const`: A compile-time constant

Threading:
- `async`: Specifies an asynchronous method, lambda expression, or anonymous method
- `volatile`: Indicates a field that may be modified on separate threads. In most cases, it should be avoided

Directives:
- `namespace`: Similar to Java's `package`, but does not need to match the filename, and can be declared as a statement for a whole file, or a block for a section of a file
- `using` and `using static`: Equivalent to Java's `import` and `import static`. Can be prefixed with `global` to apply to all files in the current compilation
- `extern alias`: Can specify aliases for specific assemblies, so they can distinguished even if they have the same fully-qualified type names

`default`: Can be used in a [switch statement](./switch_statements_and_expressions), [generic constraint](./generics), or to produce the default value of a type

`extern`: Declares a method that is implemented externally, typically in a different language that is loaded as a DLL

`params`: Equivalent to Java's varargs `...`, but it does not need to be an array

```c#
void ParamsExample(params List<int> list) { }

ParamsExample(1, 2, 3, 4); // Call with any amount of loose params
ParamsExample([1, 2, 3, 4]); // Call with list
```

`delegate`: Defines a delegate type, which stores a function. In most cases, just use the stdlib `Action` and `Func` delegates. This just lets you give it a unique type and param names

`event`: Defines an event, which is a delegate type that listeners can subscribe to. todo event details

### Contextual Keywords

Contextual keywords are not reserved, but have special meanings in certain contexts. Most later-added keywords are contextual for backwards compatibility

- `add`, `remove`: Define a custom event accessor
- `partial`: Allows a type or member to be split into multiple definitions. Mostly used to define blank methods to be filled by source generators

Also see: [Classes](./classes), [Enums](./enums), [Extensions](./extensions), [Generics](./generics), [Interfaces](./interfaces), [LINQ Expressions](./linq_expressions), [Nullability](./nullability), [Object Initializers](./object_initializers), [Operator Overloading](./operator_overloading), [Operators](./operators), [Pattern Matching](./pattern_matching), [Properties](./properties), [References](./references), [Statements](./statements), [Structs](./structs), [Switch Statements and Expressions](./switch_statements_and_expressions), [Types](./types), [Unsafe Code](./unsafe_code)

MS docs:

- [Keywords](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords)
- [Asynchronous Programming](https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/)
- [Events](https://learn.microsoft.com/en-us/dotnet/standard/events/)
