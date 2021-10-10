import { Module } from '@nestjs/common';
import StudentsController from 'src/Student/controllers/student.controller';
import { TeacherStudentController } from 'src/Teacher/teacher-student.controller';
import TeacherController from 'src/Teacher/teacher.controller';

@Module({
    imports: [],
    controllers: [
        StudentsController,
        TeacherController,
        TeacherStudentController,
    ],
})
export class AppModule {}
