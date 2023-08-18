import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get('/')
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('customer') customer: string,
  ) {
    return {
      message: `limit => ${limit} and offset => ${offset} and customer: ${customer}`,
    };
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return {
      message: `customer id: ${id}`,
    };
  }
  @Post('/')
  create(@Body() payload: any) {
    return {
      message: 'creando customer',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
