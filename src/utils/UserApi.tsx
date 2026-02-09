const BACK_END_URL = import.meta.env.VITE_BACK_END_URL;

export async function updateProfile(name: string, profession: string) {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Não autenticado");
    }

    const res = await fetch(`${BACK_END_URL}/users/me`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, profession }),
    });

    if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || `Erro ao atualizar perfil: ${res.status}`);
    }

    return res.json() as Promise<{
        _id: string;
        email: string;
        name: string;
        profession: string;
    }>;
}
