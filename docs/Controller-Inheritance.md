# Controller Inheritance

Often your app may need to have an option to inherit controller from another to reuse code and avoid duplication. A strong example shows CRUD operations hidden inside `AbstractBaseController`, allowing the addition and overriding of methods, the template method pattern.

```
@Controller(`/product`)
class ProductController extends AbstractControllerTemplate {}
@Controller(`/category`)
class CategoryController extends AbstractControllerTemplate {}
abstract class AbstractControllerTemplate {
  @Post()
  public create() {}

  @Get()
  public read() {}

  @Put()
  public update() {}

  @Delete()
  public delete() {}
}
```

https://en.wikipedia.org/wiki/Template_method_pattern
