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
import { MaterialService } from "../material.service";
import { MaterialCreateInput } from "./MaterialCreateInput";
import { Material } from "./Material";
import { MaterialFindManyArgs } from "./MaterialFindManyArgs";
import { MaterialWhereUniqueInput } from "./MaterialWhereUniqueInput";
import { MaterialUpdateInput } from "./MaterialUpdateInput";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";

export class MaterialControllerBase {
  constructor(protected readonly service: MaterialService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Material })
  async createMaterial(
    @common.Body() data: MaterialCreateInput
  ): Promise<Material> {
    return await this.service.createMaterial({
      data: {
        ...data,

        project: data.project
          ? {
              connect: data.project,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Material] })
  @ApiNestedQuery(MaterialFindManyArgs)
  async materials(@common.Req() request: Request): Promise<Material[]> {
    const args = plainToClass(MaterialFindManyArgs, request.query);
    return this.service.materials({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Material })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async material(
    @common.Param() params: MaterialWhereUniqueInput
  ): Promise<Material | null> {
    const result = await this.service.material({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,

        project: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Material })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMaterial(
    @common.Param() params: MaterialWhereUniqueInput,
    @common.Body() data: MaterialUpdateInput
  ): Promise<Material | null> {
    try {
      return await this.service.updateMaterial({
        where: params,
        data: {
          ...data,

          project: data.project
            ? {
                connect: data.project,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          name: true,

          project: {
            select: {
              id: true,
            },
          },

          quantity: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Material })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMaterial(
    @common.Param() params: MaterialWhereUniqueInput
  ): Promise<Material | null> {
    try {
      return await this.service.deleteMaterial({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,

          project: {
            select: {
              id: true,
            },
          },

          quantity: true,
          updatedAt: true,
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

  @common.Get("/:id/orders")
  @ApiNestedQuery(OrderFindManyArgs)
  async findOrders(
    @common.Req() request: Request,
    @common.Param() params: MaterialWhereUniqueInput
  ): Promise<Order[]> {
    const query = plainToClass(OrderFindManyArgs, request.query);
    const results = await this.service.findOrders(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        material: {
          select: {
            id: true,
          },
        },

        orderDate: true,

        project: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/orders")
  async connectOrders(
    @common.Param() params: MaterialWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        connect: body,
      },
    };
    await this.service.updateMaterial({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orders")
  async updateOrders(
    @common.Param() params: MaterialWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        set: body,
      },
    };
    await this.service.updateMaterial({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orders")
  async disconnectOrders(
    @common.Param() params: MaterialWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        disconnect: body,
      },
    };
    await this.service.updateMaterial({
      where: params,
      data,
      select: { id: true },
    });
  }
}
