import { Module } from "@nestjs/common";
import { ViewModuleBase } from "./base/view.module.base";
import { ViewService } from "./view.service";
import { ViewController } from "./view.controller";
import { ViewResolver } from "./view.resolver";

@Module({
  imports: [ViewModuleBase],
  controllers: [ViewController],
  providers: [ViewService, ViewResolver],
  exports: [ViewService],
})
export class ViewModule {}
