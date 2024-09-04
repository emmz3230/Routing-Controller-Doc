# Controller Inheritance

Often your application may need to have an option to inherit controller from another to reuse code and avoid duplication. A good example of the use is the CRUD operations which can be hidden inside `AbstractBaseController` with the possibility to add new and overload methods, the template method pattern.

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
