import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DialogService } from './dialog.service';
import {CreateDialogDto, SendMessageDto} from './dto/create-dialog.dto';
import { UpdateDialogDto } from './dto/update-dialog.dto';

@Controller('dialog')
export class DialogController {
  constructor(private readonly dialogService: DialogService) {}

  @Post(':id')
  create(@Param('id') id: string,@Body() createDialogDto: CreateDialogDto) {
    return this.dialogService.create(id,createDialogDto);
  }

  @Get()
  findAll() {
    return this.dialogService.findAll();
  }

  @Get('check/:id')
  update(@Param('id') id: string) {
    return this.dialogService.update(id);
  }
  @Patch('message/:id')
  sendMessage(@Param('id') id: string, @Body() updateDialogDto: SendMessageDto) {
    return this.dialogService.sendMessage(id, updateDialogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dialogService.remove(id);
  }
}
