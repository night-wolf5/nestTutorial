import { Controller, Get, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('students')
export default class StudentsController {
    @Get()
    getStudents(@Req() req) {
        return 'All Students';
    }

    @Get('/:studentId')
    getStudentsById(@Req() req: Request) {
        return `Get Student By Id of studentId ${req.params['studentId']}`;
    }

    @Post()
    createStudent() {
        return 'Create Student';
    }

    @Put()
    updateStudent() {
        'Update Student';
    }
}
