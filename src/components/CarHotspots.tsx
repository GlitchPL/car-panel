import React from 'react';

/**
 * Minimalistyczny schemat auta z prostymi hotspotami.
 * Każdy hotspot ma status: ok, check, replace – podświetlony odpowiednim kolorem.
 */
export const CarHotspots: React.FC = () => (
  <svg
    viewBox="0 0 200 120"
    className="w-full h-auto text-gray-400"
    aria-label="Schemat auta z hotspotami"
    role="img"
  >
    {/* Podstawowy kontur pojazdu – prosty prostokąt + koło */}
    <rect x="20" y="30" width="160" height="60" rx="10" ry="10" stroke="#444" fill="none" />
    <circle cx="120" cy="90" r="8" stroke="#444" fill="none" />

    {/* Hotspoty */}
    {[
      { id: 'engine', x: 40, y: 45, status: 'ok' },
      { id: 'brakes', x: 80, y: 35, status: 'check' },
      { id: 'tires', x: 140, y: 85, status: 'replace' },
    ].map(({ id, x, y, status }) => (
      <g key={id}>
        <circle
          cx={x}
          cy={y}
          r="5"
          fill={status === 'ok' ? '#2f855a' : status === 'check' ? '#3182ce' : '#c53030'}
          stroke="#fff"
          strokeWidth="1"
        />
        <title>{`${id} – ${status}`}</title>
      </g>
    ))}
  </svg>
);
