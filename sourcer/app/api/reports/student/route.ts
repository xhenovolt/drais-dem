import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const student_id = searchParams.get('student_id');
    const term_id = searchParams.get('term_id');

    if (!student_id || !term_id) {
      return NextResponse.json({ 
        success: false, 
        message: 'Student ID and Term ID are required.' 
      }, { status: 400 });
    }

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'drais_school',
    });

    const [results] = await connection.execute(
      `SELECT s.first_name, s.last_name, s.date_of_birth, c.name AS class_name, r.subject_name, r.score, r.out_of, r.remarks
       FROM students s
       JOIN classes c ON s.class_id = c.id
       JOIN results r ON s.id = r.student_id
       WHERE s.id = ? AND r.term_id = ?`,
      [student_id, term_id]
    );

    await connection.end();

    if ((results as any[]).length === 0) {
      return NextResponse.json({ 
        success: false, 
        message: 'No results found for the specified student and term.' 
      }, { status: 404 });
    }

    const student = (results as any[])[0];
    const age = new Date().getFullYear() - new Date(student.date_of_birth).getFullYear();

    return NextResponse.json({
      success: true,
      school: {
        name: 'BUGEMBE ISLAMIC INSTITUTE',
        address: 'BUGEMBE, JINJA',
        arabic_name: 'معهد بوجيمبي الإسلامي',
        arabic_address: 'بوجيمبي، جينجا',
      },
      student: {
        first_name: student.first_name,
        last_name: student.last_name,
        class_name: student.class_name,
        age,
      },
      results: (results as any[]).map((r: any) => ({
        subject_name: r.subject_name,
        score: r.score,
        out_of: r.out_of,
        remarks: r.remarks,
      })),
      comments: {
        class_teacher_comment: 'عمل ممتاز، استمر في التفوق.',
        dos_comment: 'أداء رائع، حافظ على هذا المستوى.',
        headteacher_comment: 'نتائج مبهرة، نحن فخورون بك.',
      },
    });
  } catch (error) {
    console.error('Reports student API error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to fetch report data.', 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}