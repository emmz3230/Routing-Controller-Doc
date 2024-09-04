# Auto validating action params

Sometimes parsing a json object into instance of some class is not enough. E.g. class-transformer doesn't check whether the property's types are correct, so you can get runtime error if you rely on TypeScript type safe. Also you may want to validate the object to check e.g. whether the password string is long enough or entered e-mail is correct.

It can be done easily thanks to integration with [class-validator](https://github.com/typestack/class-validator). This behaviour is enabled by default. If you want to disable it, you need to do it explicitly e.g. by passing `validation: false` option on application bootstrap:

```
import { createExpressServer } from 'routing-controllers';

createExpressServer({
  validation: false,
}).listen(3000);
```

If you want to turn on the validation only for some params, not globally for every parameter, you can do this locally by setting `validate: true` option in parameter decorator options object:

```
@Post("/login")
login(@Body({ validate: true }) user: User) {}
```

Now you need to define the class which type will be used as type of controller's method param. Decorate the properties with appropriate validation decorators.
