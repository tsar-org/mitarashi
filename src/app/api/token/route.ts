
import { NextResponse, NextRequest } from "next/server";


export async function POST(req: NextRequest) {
    const requestBody = await req.json() as { code: string };
    const code = requestBody.code;
    if (!code) {
        return NextResponse.json({ error: "Invalid code" }, { status: 400 });
    }


    const response = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            // TODO: replace env vars
            client_id: '1329832055307243635',
            client_secret: 'Nto890MUvH-zoGywIXhbgidpts0pmAb-',
            grant_type: 'authorization_code',
            code: code,
        }),
    });

    const { access_token } = (await response.json()) as {
        access_token: string;
    };

    return NextResponse.json({ access_token });
}
