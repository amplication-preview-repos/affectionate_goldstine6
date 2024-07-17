/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EngagementService } from "../engagement.service";
import { EngagementCreateInput } from "./EngagementCreateInput";
import { Engagement } from "./Engagement";
import { EngagementFindManyArgs } from "./EngagementFindManyArgs";
import { EngagementWhereUniqueInput } from "./EngagementWhereUniqueInput";
import { EngagementUpdateInput } from "./EngagementUpdateInput";

export class EngagementControllerBase {
  constructor(protected readonly service: EngagementService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Engagement })
  async createEngagement(
    @common.Body() data: EngagementCreateInput
  ): Promise<Engagement> {
    return await this.service.createEngagement({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        postId: true,
        shares: true,
        likes: true,
        comments: true,
        engagementDate: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Engagement] })
  @ApiNestedQuery(EngagementFindManyArgs)
  async engagements(@common.Req() request: Request): Promise<Engagement[]> {
    const args = plainToClass(EngagementFindManyArgs, request.query);
    return this.service.engagements({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        postId: true,
        shares: true,
        likes: true,
        comments: true,
        engagementDate: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Engagement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async engagement(
    @common.Param() params: EngagementWhereUniqueInput
  ): Promise<Engagement | null> {
    const result = await this.service.engagement({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        postId: true,
        shares: true,
        likes: true,
        comments: true,
        engagementDate: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Engagement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEngagement(
    @common.Param() params: EngagementWhereUniqueInput,
    @common.Body() data: EngagementUpdateInput
  ): Promise<Engagement | null> {
    try {
      return await this.service.updateEngagement({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          postId: true,
          shares: true,
          likes: true,
          comments: true,
          engagementDate: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Engagement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEngagement(
    @common.Param() params: EngagementWhereUniqueInput
  ): Promise<Engagement | null> {
    try {
      return await this.service.deleteEngagement({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          postId: true,
          shares: true,
          likes: true,
          comments: true,
          engagementDate: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}