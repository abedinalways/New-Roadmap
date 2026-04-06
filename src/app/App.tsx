import { useState } from 'react';
import T from './styles/theme';
import { Lang } from './types';

import { getPageMap } from './constants/routes';
import { ALL_NAV_ITEMS } from './constants/navGroups';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/header';



export default function App() {
  const [page, setPage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [lang, setLang] = useState<Lang>('both');

  const pageMap = getPageMap(lang, setPage);
  const curItem = ALL_NAV_ITEMS.find(i => i.id === page);

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        background: T.bg,
        color: T.text,
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        overflow: 'hidden',
      }}
    >
      {/* Sidebar */}
      {sidebarOpen && <Sidebar page={page} setPage={setPage} />}

      {/* Main area */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Header
          curItem={curItem}
          lang={lang}
          setLang={setLang}
          onToggleSidebar={() => setSidebarOpen(s => !s)}
        />

        {/* Page content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px 28px' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            {pageMap[page] ?? <p style={{ color: T.muted }}>Page not found</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
