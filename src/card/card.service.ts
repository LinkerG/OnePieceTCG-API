import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './schemas/card.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class CardService {
    constructor(
        @InjectModel(Card.name)
        private cardModel: mongoose.Model<Card>,
    ) { }

    async findAll(): Promise<Card[]> {
        const cards = await this.cardModel.find();

        if (!cards) throw new NotFoundException("No cards found");
        else return cards;
    }
}
