import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { CreateFoodDto } from 'src/food/dto/create_food_dto';
import { UpdateFoodDto } from 'src/food/dto/update_food_dto copy';

@Controller('api/food')
export class FoodController {
  // POST /food - 음식 추가
  @Post()
  addMeal(@Body() createFoodDto: CreateFoodDto) {
    return '음식 추가 ' + createFoodDto.name;
  }

  // PATCH /food/:id - 음식 수정
  @Patch(':id')
  updateMeal(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
    return '음식 수정';
  }

  // DELETE /food/:id - 음식 삭제
  @Delete(':id')
  deleteMeal(@Param('id') id: string) {
    return '음식 삭제';
  }
}
