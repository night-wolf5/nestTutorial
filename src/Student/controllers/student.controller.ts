import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import {
    studentDto,
    findStudentDto,
    updateStudentDto,
    createStudentDto,
} from '../Dto/student.dto';
import { StudentService } from '../student.service';

@Controller('students')
export default class StudentsController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudents(@Req() req): findStudentDto[] {
        return this.studentService.getStudents();
    }

    @Get('/:studentId')
    getStudentsById(@Req() req: Request): studentDto {
        let studentId = req.params['studentId'];
        return this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(@Body() body: createStudentDto): studentDto {
        return this.studentService.createStudent(body);
    }

    @Put()
    updateStudent(@Body() body: updateStudentDto): studentDto {
        return 'Update Student';
    }
}
