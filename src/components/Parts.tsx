import React from 'react';
import { partCategories, PartCategory, partsStateSeed, Part } from '../data/partCategories';

const Parts: React.FC = () => {
  const [selectedCatId, setSelectedCatId] = useState<string>('');
  const filteredParts: Part[] = partsStateSeed.filter(p => p.categoryId === selectedCatId);

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <nav className="w-48 bg-gray-100 border-r pr-4 overflow-y-auto">
        <ul>
          {partCategories.map(cat => (
            <li key={cat.id} className="p-2 cursor-pointer">
              <button
                onClick={() => setSelectedCatId(cat.id)}
                className={`w-full text-left rounded-md px-2 py-1 ${selectedCatId === cat.id ? 'bg-blue-200' : ''}`}
              >{cat.name}</button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <main className="flex-1 p-4 overflow-y-auto">
        {selectedCatId ? (
          <div>
            <h3 className="text-lg font-medium mb-2">{partCategories.find(c => c.id === selectedCatId)?.name} – części</h3>
            <ul className="space-y-1">
              {filteredParts.map((p, i) => (
                <li key={i} className="border p-2 rounded-md">
                  <strong>{p.name}</strong> – status: {p.status}
                  {p.zone && <span>, zona: {p.zone}</span>}
                  {p.buyLink && (
                    <div>
                      <a href={p.buyLink} target="_blank" rel="noopener noreferrer">Zakup</a>
                    </div>
                  )}
                  {p.notes && <p className="italic text-sm">{p.notes}</p>}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-600">Wybierz kategorię z lewej kolumny.</p>
        )}
      </main>
    </div>
  );
};

export default Parts;
