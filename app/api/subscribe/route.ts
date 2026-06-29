import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, name } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 });
  }

  try {
    const response = await fetch('https://api.beehiiv.com/v2/publications/pub_e41592fa-2f38-42e9-971b-8bc4f120ccee/subscriptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eenUsXcelFMGq2cE1n7uBRiAdbpQ07HwvbxrRKTqUfcqla0mMrUzvVxTmPdrgeVt'
      },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        send_welcome_email: true,
        utm_source: 'website',
        utm_medium: 'organic',
        custom_fields: [{ name: 'name', value: name || '' }]
      })
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: data }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
