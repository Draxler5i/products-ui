import { useState } from 'react';
import useAuth from './hooks/useAuth';
import { LogOut, Package } from 'lucide-react';
import RegisterForm from './components/Register';
import LoginForm from './components/Login';
import ProductsList from './components/ProductList';

const App = () => {
  const { user, token, loading, login, logout, isAuthenticated } = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-500">Cargando...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
          <div className="text-center mb-8">
            <Package className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Gestión de Productos
            </h1>
            <p className="text-gray-600">
              {showRegister ? 'Crea tu cuenta' : 'Inicia sesión para continuar'}
            </p>
          </div>

          {showRegister ? (
            <>
              <RegisterForm onSuccess={() => setShowRegister(false)} />
              <p className="text-center text-sm text-gray-600 mt-4">
                ¿Ya tienes cuenta?{' '}
                <button
                  onClick={() => setShowRegister(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Inicia sesión
                </button>
              </p>
            </>
          ) : (
            <>
              <LoginForm onSuccess={login} />
              <p className="text-center text-sm text-gray-600 mt-4">
                ¿No tienes cuenta?{' '}
                <button
                  onClick={() => setShowRegister(true)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Regístrate
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Package className="w-8 h-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-800">
                Gestión de Productos
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-800">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {token && user && <ProductsList token={token} user={user} />}
      </main>
    </div>
  );
}

export default App;
