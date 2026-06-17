export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email required' });
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
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ error: data });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}
