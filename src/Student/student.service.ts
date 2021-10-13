import { Injectable } from '@nestjs/common';
import { students } from '../../studentData';
import {
    createStudentDto,
    findStudentDto,
    studentDto,
    updateStudentDto,
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
        this.students.push(newStudent);
        return newStudent;
    }

    updateStudent(payload: updateStudentDto): studentDto {
        let newStudent: studentDto;
        this.students = students.map((student) => {
            if (student.id === payload.id) {
                newStudent = { id: payload.id, ...payload };
                return newStudent;
            } else {
                return student;
            }
        });
        return newStudent;
    }
}
