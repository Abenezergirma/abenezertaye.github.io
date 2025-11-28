import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('📧 Contact form submission received');
    
    const { name, email, subject, message } = await request.json();

    console.log('📝 Form data:', { name, email, subject, message });
    console.log('🎯 Intended for: abenezertaye@gvu.edu');

    // Input validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log successful submission
    console.log('✅ Contact form validated successfully');

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! Your message has been received.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}