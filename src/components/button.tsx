import { useState } from 'react'

export const ReactButton = ({ label, onClick }) => (
  <button onClick={onClick} className="btn-primary">
    {label}
  </button>
);
