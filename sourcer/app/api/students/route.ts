import { NextRequest, NextResponse } from 'next/server';
import { getConnection } from '@/lib/db';
import { NotificationMiddleware } from '@/lib/middleware/notificationMiddleware';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      first_name,
      last_name,
      email,
      phone,
      class_id,
      section_id,
      roll_number,
      admission_no,
      school_id
    } = body;

    // Validate required fields
    if (!first_name || !last_name || !school_id) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create student record
    const connection = await getConnection();
    const [result] = await connection.execute(
      `INSERT INTO students (first_name, last_name, email, phone, class_id, section_id, roll_number, admission_no, school_id, created_at, updated_at) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
      [first_name, last_name, email, phone, class_id, section_id, roll_number, admission_no, school_id]
    );
    await connection.end();
    
    const studentId = (result as any).insertId;

    // Prepare response data
    const responseData = {
      success: true,
      student_id: studentId,
      message: 'Student created successfully'
    };

    // Send notification to admins
    const adminRecipients = await NotificationMiddleware.getAdminRecipients(school_id);
    await NotificationMiddleware.notifyOnAction(req, {
      action: 'student_enrolled',
      entity_type: 'student',
      entity_id: studentId,
      actor_user_id: 1, // TODO: Get from session
      school_id,
      recipients: adminRecipients,
      metadata: {
        student_name: `${first_name} ${last_name}`,
        class_name: class_id, // Assuming class_id is the class name, otherwise fetch the class name
        admission_no
      }
    }, responseData);

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error creating student:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}