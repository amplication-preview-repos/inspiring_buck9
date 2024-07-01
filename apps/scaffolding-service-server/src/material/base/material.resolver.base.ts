/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Material } from "./Material";
import { MaterialCountArgs } from "./MaterialCountArgs";
import { MaterialFindManyArgs } from "./MaterialFindManyArgs";
import { MaterialFindUniqueArgs } from "./MaterialFindUniqueArgs";
import { CreateMaterialArgs } from "./CreateMaterialArgs";
import { UpdateMaterialArgs } from "./UpdateMaterialArgs";
import { DeleteMaterialArgs } from "./DeleteMaterialArgs";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { Scaffolding } from "../../scaffolding/base/Scaffolding";
import { MaterialService } from "../material.service";
@graphql.Resolver(() => Material)
export class MaterialResolverBase {
  constructor(protected readonly service: MaterialService) {}

  async _materialsMeta(
    @graphql.Args() args: MaterialCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Material])
  async materials(
    @graphql.Args() args: MaterialFindManyArgs
  ): Promise<Material[]> {
    return this.service.materials(args);
  }

  @graphql.Query(() => Material, { nullable: true })
  async material(
    @graphql.Args() args: MaterialFindUniqueArgs
  ): Promise<Material | null> {
    const result = await this.service.material(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Material)
  async createMaterial(
    @graphql.Args() args: CreateMaterialArgs
  ): Promise<Material> {
    return await this.service.createMaterial({
      ...args,
      data: {
        ...args.data,

        project: args.data.project
          ? {
              connect: args.data.project,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Material)
  async updateMaterial(
    @graphql.Args() args: UpdateMaterialArgs
  ): Promise<Material | null> {
    try {
      return await this.service.updateMaterial({
        ...args,
        data: {
          ...args.data,

          project: args.data.project
            ? {
                connect: args.data.project,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Material)
  async deleteMaterial(
    @graphql.Args() args: DeleteMaterialArgs
  ): Promise<Material | null> {
    try {
      return await this.service.deleteMaterial(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Order], { name: "orders" })
  async findOrders(
    @graphql.Parent() parent: Material,
    @graphql.Args() args: OrderFindManyArgs
  ): Promise<Order[]> {
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Scaffolding, {
    nullable: true,
    name: "project",
  })
  async getProject(
    @graphql.Parent() parent: Material
  ): Promise<Scaffolding | null> {
    const result = await this.service.getProject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}