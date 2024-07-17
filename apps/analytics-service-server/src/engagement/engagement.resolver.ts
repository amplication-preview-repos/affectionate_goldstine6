import * as graphql from "@nestjs/graphql";
import { EngagementResolverBase } from "./base/engagement.resolver.base";
import { Engagement } from "./base/Engagement";
import { EngagementService } from "./engagement.service";

@graphql.Resolver(() => Engagement)
export class EngagementResolver extends EngagementResolverBase {
  constructor(protected readonly service: EngagementService) {
    super(service);
  }
}
