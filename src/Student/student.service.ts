import { Injectable } from '@nestjs/common';
import { students } from '../../studentData';
import {
    createStudentDto,
    findStudentDto,
    studentDto,
} from './Dto/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
    private students = students;

    getStudents(): findStudentDto[] {
        return this.students;
    }

    getStudentById(id: string): findStudentDto {
        return this.students.find((student) => {
            return student.id === id;
        });
    }

    createStudent(payload: createStudentDto): studentDto {
        let newStudent = { id: uuid(), ...payload };
        students.push(newStudent);
        return newStudent;
    }
}
