import { Module } from "@nestjs/common";
import { EngagementModuleBase } from "./base/engagement.module.base";
import { EngagementService } from "./engagement.service";
import { EngagementController } from "./engagement.controller";
import { EngagementResolver } from "./engagement.resolver";

@Module({
  imports: [EngagementModuleBase],
  controllers: [EngagementController],
  providers: [EngagementService, EngagementResolver],
  exports: [EngagementService],
})
export class EngagementModule {}
