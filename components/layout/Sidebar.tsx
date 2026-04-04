import { NAV_GROUPS } from "@/app/constants/navGroups";
import T from "@/app/styles/theme";


interface SidebarProps {
  page: string;
  setPage: (id: string) => void;
}

export default function Sidebar({ page, setPage }: SidebarProps) {
  return (
    <div
      style={{
        width: 240,
        background: T.sidebar,
        borderRight: `1px solid ${T.border}`,
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        overflowY: 'auto',
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: '18px 16px 12px',
          borderBottom: `1px solid ${T.border}`,
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 800,
            color: T.accentL,
            letterSpacing: 1,
          }}
        >
          👨‍💻 SENIOR FRONTEND
        </div>
        <div style={{ fontSize: 11, color: T.dim, marginTop: 2 }}>
          Complete Guide • বাংলা + English
        </div>
      </div>

      {/* Nav items */}
      <div style={{ flex: 1, padding: '8px 0' }}>
        {NAV_GROUPS.map(group => (
          <div key={group.cat}>
            <div
              style={{
                padding: '10px 16px 4px',
                fontSize: 10,
                fontWeight: 700,
                color: T.dim,
                letterSpacing: 1,
                textTransform: 'uppercase',
              }}
            >
              {group.cat}
            </div>
            {group.items.map(item => (
              <div
                key={item.id}
                onClick={() => setPage(item.id)}
                style={{
                  padding: '8px 16px',
                  cursor: 'pointer',
                  borderRadius: 6,
                  margin: '1px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: page === item.id ? T.accentGlow : 'transparent',
                  borderLeft:
                    page === item.id
                      ? `3px solid ${T.accent}`
                      : '3px solid transparent',
                  color: page === item.id ? T.accentL : T.muted,
                  fontSize: 13,
                  fontWeight: page === item.id ? 600 : 400,
                }}
              >
                <span style={{ fontSize: 14 }}>{item.icon}</span>
                <span>{item.en}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
