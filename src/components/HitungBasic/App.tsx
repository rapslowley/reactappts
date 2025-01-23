import '../../App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [hitung, setHitung] = useState(0);
  const [pesan, setPesan] = useState('');

  const HitungTambah = () => {
    if (hitung == 10) {
      setPesan('TIDAK BISA LEBIH DARI 10 KAK !');
      setHitung(0);
    } else {
      setHitung(hitung + 1);
    }
  };

  const HitungKurang = () => {
    if (hitung <= 0) {
      setPesan('TIDAK BISA KURANG DARI 0 KAK !');
    } else {
      setHitung(hitung - 1);
    }
  };

  const HitungReset = () => {
    setPesan('NILAI BERHASIL DIRESET !');
    setHitung(0);
  };

  useEffect(() => {
    const timer = setInterval(() => setPesan(''), 2000);
    return () => clearInterval(timer);
  }, [pesan]);

  return (
    <>
      <h1>Hi, Mari Kita Berhitung Bersama</h1>
      <p className="nilaiHitung">{hitung}</p>
      <p className="notifPesan">{pesan}</p>
      <button onClick={HitungTambah}>Tambahkan 1</button>
      <button onClick={HitungKurang}>Kurangin 1</button>
      <button onClick={HitungReset}>Reset Nilai</button>
    </>
  );
};

export default App;
