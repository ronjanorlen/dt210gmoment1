import "./BikeTrails.css"; // Importera css-fil för komponent

// Interface för BikeTrails 
interface BikeTrailProps {
    name: string;
    level: string;
    haveTried: boolean;
    rating: number;
}

function BikeTrails({ name, level, haveTried, rating }: BikeTrailProps) {
    return (
        <div className="biketrail-card">
            <h2>{name}</h2>
            <p><strong>Nivå:</strong> { level }</p>
            <p><strong>Har cyklat:</strong> {haveTried ? "Ja" : "Nej"} </p>
            <p><strong>Rating:</strong> { rating > 0 ? `${rating}/5` : "Har inte cyklat än" }</p>
        </div>
    );
}

export default BikeTrails; // Exportera komponent