import { prisma } from '@repo/db/client'

export default async function User() {
    const user = await prisma.user.findFirst();
    if (!user) return <div>No user</div>
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    )
}
