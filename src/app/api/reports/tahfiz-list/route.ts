import { NextRequest, NextResponse } from 'next/server';
import { getConnection } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const schoolId = searchParams.get('school_id');

    if (!schoolId) {
      return NextResponse.json(
        { error: 'School ID is required' },
        { status: 400 }
      );
    }

    const connection = await getConnection();
    
    const [students] = await connection.execute(
      `SELECT 
        s.id,
        s.name,
        s.reg_no,
        s.photo_url,
        tg.name as group_name,
        COUNT(DISTINCT tr.id) as portions_completed,
        SUM(tr.pages_memorized) as total_pages
      FROM students s
      LEFT JOIN tahfiz_group_members tgm ON s.id = tgm.student_id
      LEFT JOIN tahfiz_groups tg ON tgm.group_id = tg.id
      LEFT JOIN tahfiz_records tr ON s.id = tr.student_id
      WHERE s.school_id = ? AND s.status = 'active'
      GROUP BY s.id
      ORDER BY s.name ASC`,
      [schoolId]
    );

    await connection.end();

    return NextResponse.json({ success: true, students });
  } catch (error) {
    console.error('Tahfiz list fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tahfiz students' },
      { status: 500 }
    );
  }
}
