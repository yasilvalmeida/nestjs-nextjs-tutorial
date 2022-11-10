import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateTaxDto } from './dto/create-tax.dto';
import { UpdateTaxDto } from './dto/update-tax.dto';
import { Tax } from './entities/tax.entity';
import taxesJson from '@db/taxes.json';

const taxes = plainToClass(Tax, taxesJson);

@Injectable()
export class TaxesService {
  constructor(private prisma: PrismaService) {}
  private taxes: Tax[] = taxes;

  async create(createTaxDto: CreateTaxDto) {
    const result = await this.prisma.tax.create({
      data: createTaxDto,
    });
    return result;
  }

  findAll() {
    return this.prisma.tax.findMany();
  }

  findOne(id: number) {
    return this.prisma.tax.findFirst({ where: { id } });
  }

  update(id: number, updateTaxDto: UpdateTaxDto) {
    return this.taxes[0];
  }

  remove(id: number) {
    return `This action removes a #${id} tax`;
  }
}
