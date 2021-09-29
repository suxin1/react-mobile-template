import './index.css';
const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext) =>
  requireContext.keys().map((key, a, b) => {
    console.log(key, a, b);
    requireContext(key);
  });
requireAll(req);
