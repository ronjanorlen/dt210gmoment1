import banner from "../assets/banner.jpg"; // Importera banner-bild

// Interface för header 
interface HeaderProps {
    title: string;
}

function Header({ title }: HeaderProps) {
    return (
        <header>
            {/* Header med titel och inline-styling */}
            <div style={{ backgroundColor: "#222", padding: "0.8em", textAlign: "center" }}>
                <h1 style={{ color: "#fff", margin: "10px" }}>{title}</h1>
            </div>
            {/* Banner-bild */}
            <div style={{ width: "100%" }}>
                <img
                    src={banner}
                    alt="Två personer cyklar downhill"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        maxHeight: "500px",
                        objectFit: "cover"
                    }}
                />
            </div>
        </header>
    );
}

export default Header; // Exportera header-komponent