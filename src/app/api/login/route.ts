import { NextResponse, NextRequest } from 'next/server'
import { cookies } from 'next/headers'

import { BASE_API_ENDPOINT } from '@/utils/constant'
import { API_ENDPOINTS } from '@/api-service/api-endpoints'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, device_token, device_id } = body

    if (!email || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const res = await fetch(`${BASE_API_ENDPOINT}${API_ENDPOINTS.AUTH.LOGIN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, device_token, device_id }),
    })

    const data = await res.json()

    if (!res.ok) {
      return NextResponse.json({ error: data.message }, { status: 400 })
    }

    cookies().set('token', data.result.accessToken, {
      maxAge: 60 * 60 * 1 * 24,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    })

    cookies().set('role', data.result.role, {
      maxAge: 60 * 60 * 1 * 24,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    })

    return NextResponse.json({ ...data }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error }, { status: 500 })
  }
}
