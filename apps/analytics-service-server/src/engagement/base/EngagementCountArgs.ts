/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EngagementWhereInput } from "./EngagementWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class EngagementCountArgs {
  @ApiProperty({
    required: false,
    type: () => EngagementWhereInput,
  })
  @Field(() => EngagementWhereInput, { nullable: true })
  @Type(() => EngagementWhereInput)
  where?: EngagementWhereInput;
}

export { EngagementCountArgs as EngagementCountArgs };