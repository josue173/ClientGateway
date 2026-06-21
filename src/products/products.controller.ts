import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PRODUCT_SERVICE } from '../config';
import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from '../common';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy,
  ) {}

  @Post()
  createProduct() {
    return 'Crea un producto';
  }

  @Get()
  findProducts(@Query() paginationDto: PaginationDto) {
    return this.productsClient.send({ cmd: 'find_all' }, paginationDto);
  }

  @Get(':id')
  findProduct(@Param('id') id: string) {
    return 'Retorno de un producto';
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return 'Esta función elimina un producto';
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body: any) {
    return 'Esta función actualiza un producto';
  }
}
