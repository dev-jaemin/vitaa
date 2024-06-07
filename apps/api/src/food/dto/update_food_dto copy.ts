import { PartialType } from "@nestjs/mapped-types";
import { CreateFoodDto } from "src/food/dto/create_food_dto";

export class UpdateFoodDto extends PartialType(CreateFoodDto) {
    
}