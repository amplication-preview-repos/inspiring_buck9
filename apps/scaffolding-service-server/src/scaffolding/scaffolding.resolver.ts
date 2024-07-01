import * as graphql from "@nestjs/graphql";
import { ScaffoldingResolverBase } from "./base/scaffolding.resolver.base";
import { Scaffolding } from "./base/Scaffolding";
import { ScaffoldingService } from "./scaffolding.service";

@graphql.Resolver(() => Scaffolding)
export class ScaffoldingResolver extends ScaffoldingResolverBase {
  constructor(protected readonly service: ScaffoldingService) {
    super(service);
  }
}
