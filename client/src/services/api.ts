export interface User {
  id: number
  name: string
  email: string
  password: string
}

const BASE_URL = '/api/users'

export async function getUsers(): Promise<User[]> {
  const res = await fetch(BASE_URL)
  if (!res.ok) throw new Error('Error al obtener usuarios')
  return res.json()
}

export async function getUserById(id: number): Promise<User> {
  const res = await fetch(`${BASE_URL}/${id}`)
  if (!res.ok) throw new Error('Usuario no encontrado')
  return res.json()
}

export async function createUser(data: Omit<User, 'id'>): Promise<User> {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Error al crear usuario')
  return res.json()
}

export async function updateUser(id: number, data: Partial<Omit<User, 'id'>>): Promise<User> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) throw new Error('Error al actualizar usuario')
  return res.json()
}

export async function deleteUser(id: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Error al eliminar usuario')
}
