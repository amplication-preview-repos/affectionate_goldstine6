import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EngagementService } from "./engagement.service";
import { EngagementControllerBase } from "./base/engagement.controller.base";

@swagger.ApiTags("engagements")
@common.Controller("engagements")
export class EngagementController extends EngagementControllerBase {
  constructor(protected readonly service: EngagementService) {
    super(service);
  }
}
