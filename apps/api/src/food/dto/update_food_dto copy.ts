import { CreateFoodDto } from "src/food/dto/create_food_dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateFoodDto extends PartialType(CreateFoodDto) {
    
}