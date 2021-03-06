
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interfaces/cat.interface';
import { CreatCatDto } from './dto/create-cat.dto';
import { CatInput } from './inputs/cat.input';

@Injectable()
export class CatsService {
    constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) { }

    async create(catInput: CatInput): Promise<Cat> {
        const createdCat = new this.catModel(catInput);
        return await createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return await this.catModel.find().exec();
    }
}