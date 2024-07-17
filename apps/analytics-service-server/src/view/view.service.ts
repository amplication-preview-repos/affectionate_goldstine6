import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ViewServiceBase } from "./base/view.service.base";

@Injectable()
export class ViewService extends ViewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
