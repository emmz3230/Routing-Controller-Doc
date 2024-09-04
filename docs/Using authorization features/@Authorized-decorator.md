# @Authorized decorator

To make @Authorized decorator to work you need to setup special routing-controllers options:

```
import { createExpressServer, Action } from 'routing-controllers';

createExpressServer({
  authorizationChecker: async (action: Action, roles: string[]) => {
    // here you can use request/response objects from action
    // also if decorator defines roles it needs to access the action
    // you can use them to provide granular access check
    // checker must return either boolean (true or false)
    // either promise that resolves a boolean value
    // demo code:
    const token = action.request.headers['authorization'];

    const user = await getEntityManager().findOneByToken(User, token);
    if (user && !roles.length) return true;
    if (user && roles.find(role => user.roles.indexOf(role) !== -1)) return true;

    return false;
  },
}).listen(3000);

```

You can use `@Authorized` on controller actions:

```
@JsonController()
export class SomeController {
  @Authorized()
  @Post('/questions')
  save(@Body() question: Question) {}

  @Authorized('POST_MODERATOR') // you can specify roles or array of roles
  @Post('/posts')
  save(@Body() post: Post) {}
}
```
