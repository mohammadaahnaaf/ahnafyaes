import React from 'react';

import type { Stat } from '../../types';

type TableRowProps = Omit<Stat, 'key'>;

const TableRow = ({
  label, link, value = null, format = (x) => x,
}: TableRowProps) => {
  const content = format(value);
  // Values fetched from GitHub are empty until the request resolves.
  const hasContent = content !== null && content !== undefined && content !== '';

  return (
    <tr>
      <td width="70%">{label}</td>
      <td>
        {hasContent && (
          <span className="chip chip-yellow">
            {link ? <a href={link}>{content}</a> : content}
          </span>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
