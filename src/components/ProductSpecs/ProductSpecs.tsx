const formatKey = (key) => {
  // Робимо гарні заголовки: cpuName -> Cpu Name
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

const renderValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return (
      <ul className="ml-2 list-disc">
        {Object.entries(value).map(([k, v]) => (
          <li key={k}>
            <span className="font-medium">{formatKey(k)}:</span>{' '}
            {renderValue(v)}
          </li>
        ))}
      </ul>
    );
  }
  return String(value);
};

const SpecsTable = ({ data }) => {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-md">
      <h2 className="mb-3 text-lg font-semibold">Характеристики</h2>
      <ul className="space-y-2 text-gray-700">
        {Object.entries(data).map(([key, value]) => (
          <li
            key={key}
            className="flex flex-col border-b pb-2 last:border-none"
          >
            <span className="font-medium">{formatKey(key)}:</span>
            <span>{renderValue(value)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecsTable;
