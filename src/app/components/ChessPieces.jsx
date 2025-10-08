// Basic SVG chess pieces - we'll replace with better ones later
export function ChessKnight({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Simple knight silhouette */}
      <path d="M19 22H5v-2h14v2M16 18v-2H8v2h8m1-14c-.55 0-1 .45-1 1v1h-2V5c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V5c0-.55-.45-1-1-1s-1 .45-1 1v4l2 2h6l2-2V5c0-.55-.45-1-1-1z"/>
    </svg>
  )
}

export function ChessPawn({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 22H5v-2h14v2m-3-4H8l2-10h4l2 10z"/>
    </svg>
  )
}