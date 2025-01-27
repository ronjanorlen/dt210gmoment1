// Interface för header 
interface HeaderProps {
    title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <header>
        {/* Header med titel och inline-styling */}
        <div style={{ backgroundColor: "#222", padding: "1.4em", textAlign: "center" }}>
            <h1 style={{ color: "#fff", margin: "0" }}>{title}</h1>
        </div>
    </header>
  )
}

export default Header; // Exportera header-komponent