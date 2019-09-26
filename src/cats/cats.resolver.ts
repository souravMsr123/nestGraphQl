import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CatsService } from "./cats.service";
import { CreatCatDto } from "./dto/create-cat.dto";
import { CatInput } from "./inputs/cat.input";

@Resolver()
export class CatsResolver {
    constructor(
        private readonly catService: CatsService
    ) { }

    @Query(() => String)
    async hello() {
        return "Hello World";
    }

    @Query(() => [CreatCatDto])
    async cats() {
        return this.catService.findAll();
    }

    @Mutation(() => CreatCatDto)
    async createCat(@Args('input') input: CatInput) {
        return this.catService.create(input);
    }


}
