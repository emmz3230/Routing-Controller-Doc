# @CurrentUser decorator

To make `@CurrentUser` decorator to work you need to setup special routing-controllers options:

```
import { createExpressServer, Action } from 'routing-controllers';

createExpressServer({
  currentUserChecker: async (action: Action) => {
    // here you can use request/response objects from action
    // you need to provide a user object that will be injected in controller actions
    // demo code:
    const token = action.request.headers['authorization'];
    return getEntityManager().findOneByToken(User, token);
  },
}).listen(3000);
```

You can use `@CurrentUser` on controller actions:

```
@JsonController()
export class QuestionController {
  @Get('/questions')
  all(@CurrentUser() user?: User, @Body() question: Question) {}

  @Post('/questions')
  save(@CurrentUser({ required: true }) user: User, @Body() post: Post) {}
}
```

If you mark `@CurrentUser` as `required` and currentUserChecker logic return empty result, then routing-controllers throw authorization required error.
