import { useEffect, useState } from 'react'
import { getUsers, createUser, updateUser, deleteUser, type User } from '../services/api'

function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [showForm, setShowForm] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [form, setForm] = useState({ name: '', lastname: '', email: '', password: '' })

  async function loadUsers() {
    try {
      setLoading(true)
      setError(null)
      const data = await getUsers()
      setUsers(data)
    } catch {
      setError('No se pudieron cargar los usuarios. Verifica que el servidor esté corriendo.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  function openCreate() {
    setEditingUser(null)
    setForm({ name: '', lastname: '', email: '', password: '' })
    setShowForm(true)
  }

  function openEdit(user: User) {
    setEditingUser(user)
    setForm({ name: user.name, lastname: user.lastname ?? '', email: user.email, password: user.password })
    setShowForm(true)
  }

  function closeForm() {
    setShowForm(false)
    setEditingUser(null)
    setForm({ name: '', lastname: '', email: '', password: '' })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      if (editingUser) {
        await updateUser(editingUser.id, form)
      } else {
        await createUser(form)
      }
      closeForm()
      loadUsers()
    } catch {
      setError('Error al guardar el usuario')
    }
  }

  async function handleDelete(id: number) {
    if (!confirm('¿Estás seguro de eliminar este usuario?')) return
    try {
      await deleteUser(id)
      loadUsers()
    } catch {
      setError('Error al eliminar el usuario')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-light text-gray-800 dark:text-gray-100">Usuarios</h2>
        <button
          onClick={openCreate}
          className="px-4 py-2 text-sm rounded-lg bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900
                     hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
        >
          Nuevo usuario
        </button>
      </div>

      {error && (
        <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
      )}

      {loading ? (
        <p className="text-sm text-gray-400">Cargando...</p>
      ) : users.length === 0 ? (
        <p className="text-sm text-gray-400">No hay usuarios registrados.</p>
      ) : (
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {users.map((user) => (
            <div key={user.id} className="py-4 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-100 truncate">
                  {user.name} {user.lastname}
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500 truncate">{user.email}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => openEdit(user)}
                  className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-xs text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-full max-w-sm mx-4 p-6 space-y-4">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
              {editingUser ? 'Editar usuario' : 'Nuevo usuario'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Nombre"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700
                           bg-transparent text-gray-800 dark:text-gray-100
                           focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
              />
              <input
                type="text"
                placeholder="Apellido (opcional)"
                value={form.lastname}
                onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700
                           bg-transparent text-gray-800 dark:text-gray-100
                           focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700
                           bg-transparent text-gray-800 dark:text-gray-100
                           focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
              />
              <input
                type="password"
                placeholder="Contraseña"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700
                           bg-transparent text-gray-800 dark:text-gray-100
                           focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
              />
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-4 py-2 text-sm rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm rounded-lg bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900
                             hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
                >
                  {editingUser ? 'Guardar' : 'Crear'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default UsersPage
