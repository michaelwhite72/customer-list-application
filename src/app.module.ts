import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';

// ## Added
import { MongooseModule } from '@nestjs/mongoose';
// ## Added
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/customer-app', {
      useNewUrlParser: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
// ##Original code
@Module({
  imports: [CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
