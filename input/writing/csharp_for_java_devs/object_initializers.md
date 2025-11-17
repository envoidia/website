Object initializers allow you to set various fields on an object at creation without invoking a constructor. Never write
another builder again!

```c#
public class Cat {}
    public int Age { get; set; }
    public string? Name { get; set; }

    public Cat() {}

    public Cat(string name) {
        this.Name = name;
    }
}

Cat cat = new Cat { Age = 10, Name = "Fluffy" };
Cat sameCat = new Cat("Fluffy") { Age = 10 };
```

They can also set [indexers](./indexers)

```c#
public class Matrix {
    private double[,] storage = new double[3, 3];

    public double this[int row, int column] {
        get { return storage[row, column]; }
        set { storage[row, column] = value; }
    }
}

Matrix identity = {
    [0, 0] = 1.0,
    [0, 1] = 0.0,
    [0, 2] = 0.0,

    [1, 0] = 0.0,
    [1, 1] = 1.0,
    [1, 2] = 0.0,

    [2, 0] = 0.0,
    [2, 1] = 0.0,
    [2, 2] = 1.0
};
```

[Anonymous types](./anonymous_types) can only be initialized with an object initializer

`required` can be used to indicate a field or property that must be initialized by an object initializer

MS docs:

- [Object and Collection Initializers](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/object-and-collection-initializers)
