# Auto validating action params

Sometimes parsing a JSON object into instance of some class is not enough. For Example class-transformer doesn't check whether the property's types are correct, so you can get runtime error if you rely on TypeScript type safe. Also you may want to apply the object to check. for Example whether the password string is long enough or entered email is correct.

It can done easily thanks to integration with [class-validator](https://github.com/typestack/class-validator). This behaviour enable by default. If you want to turn off it, you need to do it explicitly for Example by passing `validation: false` option on app bootstrap:

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

Now, define the class used as the controller's method parameter. Decorate the properties with appropriate validation decorators.

```
export class User {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
```

If you haven't used class-validator yet, you can learn how to use the decorators and handle more complex object validation [here](https://github.com/typestack/class-validator).

Now, if you have specified a class type, your action param not only become an instance of that class (with the data sent by the user) but also apply accordingly. so you don't have to worry about. For Example incorrect email or too short password and manual checks every property in controller method body.

```
@Controller()
export class UserController {
  @Post('/login')
  login(@Body() user: User) {
    console.log(`${user.email} is for 100% sure a valid e-mail address!`);
    console.log(`${user.password.length} is for 100% sure 6 chars or more!`);
  }
}
```

If the param doesn't meet the requirements defined by class-validator decorators, an error thrown and captured by routing-controller, so the client receive 400 Bad Request and JSON with nice detailed [Validation errors](https://github.com/typestack/class-validator#validation-errors) array.

If you need special options for validation (groups, skipping missing properties, etc.) or transforming (groups, excluding prefixes, versions, etc.), you can pass them as global configuration as `validation` in createExpressServer method or as a local apply setting for method parameter - `@Body({ validate: localOptions })`.

This technique works not only with `@Body` but also with `@Param`, `@QueryParam`, `@BodyParam` and other decorators.
