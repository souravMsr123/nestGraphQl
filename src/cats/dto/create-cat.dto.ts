import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class CreatCatDto {
    @Field(() => ID)
    readonly id: string;
    @Field()
    readonly name: string;
    @Field(() => Int)
    readonly age: number;
    @Field()
    readonly breed: string;

}