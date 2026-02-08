const BACK_END_URL = import.meta.env.VITE_BACK_END_URL;

export async function signup(email: string, password: string) {
    const res = await fetch(`${BACK_END_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.message || `Erro ${res.status}`);
    }

    return res.json();
}

export async function signin(email: string, password: string) {
    const res = await fetch(`${BACK_END_URL}/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.message || `Erro ${res.status}`);
    }

    return res.json();
}
