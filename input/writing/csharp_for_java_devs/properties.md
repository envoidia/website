Properties define fields that can contain getter and setter methods

`get` defines a getter, `set` a setter, and `init` a setter that is only accessible at object creation (constructor
or [initializer](./object_initializers)). They can have access modifiers (the access modifier must be of greater
privacy than the property itself) and default values

```c#
public class Person {
	public string FirstName { get; set; }
	public string LastName { get; set; }
	public string FullName => FirstName + " " + LastName;
	public uint Age { get; private set; } = 0;
}
```

They are accessed the same as you would fields, eg `somePerson.FirstName = "Jerry"`

Properties can define arbitrary methods to be called on get or set, where `field` is the property's backing field and
`value` is the incoming value from the setter

```c#
public class Label {
	public string Text {  
	    get;  
	    set {  
	        field = value;  
	        this.Origin = this.CalcOrigin();  
	    }
    } = "";
}
```

MS docs:

- [Properties](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties)
