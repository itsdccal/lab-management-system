// src/components/common/NotFound.jsx
import { Home, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
          <h2 className="text-2xl font-bold mt-4">Halaman Tidak Ditemukan</h2>
          <p className="text-base-content/70 mt-2">
            Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/dashboard')}
          >
            <Home className="w-4 h-4" />
            Kembali ke Dashboard
          </button>
          <button 
            className="btn btn-outline"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;