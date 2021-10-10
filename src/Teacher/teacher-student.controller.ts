import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId')
export class TeacherStudentController {
    @Get('students')
    getStudentOfTeacher() {
        return 'Get Student Of Teacher';
    }

    @Put('/:studentId')
    updateStudentOfTeacher() {
        return 'Update Student of Teacher';
    }
}
