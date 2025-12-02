import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const fileName = searchParams.get('file');
    
    if (!fileName) {
      return NextResponse.json({ error: 'File parameter is required' }, { status: 400 });
    }

    const docsPath = path.join(process.cwd(), 'docs');
    const filePath = path.join(docsPath, fileName);
    
    // Security check - ensure file is within docs directory
    if (!filePath.startsWith(docsPath)) {
      return NextResponse.json({ error: 'Invalid file path' }, { status: 400 });
    }

    const content = await fs.readFile(filePath, 'utf-8');
    
    return NextResponse.json({ 
      content,
      fileName: fileName.replace('.md', ''),
      title: fileName.replace('.md', '').replace(/_/g, ' ').replace(/-/g, ' ')
    });
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return NextResponse.json({ error: 'File not found or cannot be read' }, { status: 404 });
  }
}

export async function POST() {
  try {
    const docsPath = path.join(process.cwd(), 'docs');
    const files = await fs.readdir(docsPath);
    const mdFiles = files.filter(file => file.endsWith('.md'));
    
    const fileList = mdFiles.map(file => ({
      fileName: file,
      displayName: file.replace('.md', '').replace(/_/g, ' ').replace(/-/g, ' '),
      id: file.replace('.md', '').toLowerCase().replace(/[_\s]/g, '-')
    }));
    
    return NextResponse.json({ files: fileList });
  } catch (error) {
    console.error('Error listing markdown files:', error);
    return NextResponse.json({ error: 'Cannot list documentation files' }, { status: 500 });
  }
}