import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EngagementServiceBase } from "./base/engagement.service.base";

@Injectable()
export class EngagementService extends EngagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
