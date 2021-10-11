import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';

@Controller('teacher')
export default class TeacherController {
    @Get()
    getTeachers() {
        return 'Get All Teachers';
    }

    @Get('/:teacherId')
    getTeacherById(@Param('teacherId') teacherId: string) {
        return `Get Teacher By ID Of Teacher ${teacherId}`;
    }
}
