/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ScaffoldingWhereInput } from "./ScaffoldingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ScaffoldingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ScaffoldingWhereInput,
  })
  @ValidateNested()
  @Type(() => ScaffoldingWhereInput)
  @IsOptional()
  @Field(() => ScaffoldingWhereInput, {
    nullable: true,
  })
  every?: ScaffoldingWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScaffoldingWhereInput,
  })
  @ValidateNested()
  @Type(() => ScaffoldingWhereInput)
  @IsOptional()
  @Field(() => ScaffoldingWhereInput, {
    nullable: true,
  })
  some?: ScaffoldingWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScaffoldingWhereInput,
  })
  @ValidateNested()
  @Type(() => ScaffoldingWhereInput)
  @IsOptional()
  @Field(() => ScaffoldingWhereInput, {
    nullable: true,
  })
  none?: ScaffoldingWhereInput;
}
export { ScaffoldingListRelationFilter as ScaffoldingListRelationFilter };
