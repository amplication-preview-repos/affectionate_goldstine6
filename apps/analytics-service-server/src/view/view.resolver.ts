import * as graphql from "@nestjs/graphql";
import { ViewResolverBase } from "./base/view.resolver.base";
import { View } from "./base/View";
import { ViewService } from "./view.service";

@graphql.Resolver(() => View)
export class ViewResolver extends ViewResolverBase {
  constructor(protected readonly service: ViewService) {
    super(service);
  }
}
