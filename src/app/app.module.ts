import { Module } from '@nestjs/common';
import StudentsController from 'src/Student/controllers/student.controller';
import { StudentService } from 'src/Student/student.service';
import { TeacherStudentController } from 'src/Teacher/controllers/teacher-student.controller';
import TeacherController from 'src/Teacher/controllers/teacher.controller';

@Module({
    imports: [],
    controllers: [
        StudentsController,
        TeacherController,
        TeacherStudentController,
    ],
    providers: [StudentService],
})
export class AppModule {}
