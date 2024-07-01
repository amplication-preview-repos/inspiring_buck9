import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScaffoldingService } from "./scaffolding.service";
import { ScaffoldingControllerBase } from "./base/scaffolding.controller.base";

@swagger.ApiTags("scaffoldings")
@common.Controller("scaffoldings")
export class ScaffoldingController extends ScaffoldingControllerBase {
  constructor(protected readonly service: ScaffoldingService) {
    super(service);
  }
}
