# Custom parameter decorators

You can create your own parameter decorators. Here is simple example how "session user" can be implemented using custom decorators:

```
import { createParamDecorator } from 'routing-controllers';

export function UserFromSession(options?: { required?: boolean }) {
  return createParamDecorator({
    required: options && options.required ? true : false,
    value: action => {
      const token = action.request.headers['authorization'];
      return database.findUserByToken(token);
    },
  });
}
```

And use it in your controller:

```
@JsonController()
export class QuestionController {
  @Post()
  save(@Body() question: Question, @UserFromSession({ required: true }) user: User) {
    // here you'll have user authorized and you can safely save your question
    // in the case if user returned your undefined from the database and "required"
    // parameter was set, routing-controllers will throw you ParameterRequired error
  }
}
```
