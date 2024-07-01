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
import { MaterialWhereUniqueInput } from "../../material/base/MaterialWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsInt,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { ScaffoldingWhereUniqueInput } from "../../scaffolding/base/ScaffoldingWhereUniqueInput";

@InputType()
class OrderCreateInput {
  @ApiProperty({
    required: false,
    type: () => MaterialWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MaterialWhereUniqueInput)
  @IsOptional()
  @Field(() => MaterialWhereUniqueInput, {
    nullable: true,
  })
  material?: MaterialWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  orderDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ScaffoldingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScaffoldingWhereUniqueInput)
  @IsOptional()
  @Field(() => ScaffoldingWhereUniqueInput, {
    nullable: true,
  })
  project?: ScaffoldingWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;
}

export { OrderCreateInput as OrderCreateInput };
