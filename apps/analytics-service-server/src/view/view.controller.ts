import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ViewService } from "./view.service";
import { ViewControllerBase } from "./base/view.controller.base";

@swagger.ApiTags("views")
@common.Controller("views")
export class ViewController extends ViewControllerBase {
  constructor(protected readonly service: ViewService) {
    super(service);
  }
}
