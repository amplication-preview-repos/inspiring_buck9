import { Module } from "@nestjs/common";
import { ScaffoldingModuleBase } from "./base/scaffolding.module.base";
import { ScaffoldingService } from "./scaffolding.service";
import { ScaffoldingController } from "./scaffolding.controller";
import { ScaffoldingResolver } from "./scaffolding.resolver";

@Module({
  imports: [ScaffoldingModuleBase],
  controllers: [ScaffoldingController],
  providers: [ScaffoldingService, ScaffoldingResolver],
  exports: [ScaffoldingService],
})
export class ScaffoldingModule {}
