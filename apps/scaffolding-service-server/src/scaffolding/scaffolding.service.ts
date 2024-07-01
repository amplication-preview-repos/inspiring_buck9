import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScaffoldingServiceBase } from "./base/scaffolding.service.base";

@Injectable()
export class ScaffoldingService extends ScaffoldingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
