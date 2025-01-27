import BikeTrails from './components/BikeTrails'; // Importera BikeTrails-komponent
import Footer from './components/Footer'; // Importera footer-komponent
import Header from './components/Header'; // Importera header-komponent

// Array med cykel-leder 
const trails = [
  {
    name: "Wingman",
    level: "Röd",
    haveTried: true,
    rating: 3
  },
  {
    name: "Lilla Blå",
    level: "Blå",
    haveTried: true,
    rating: 4
  },
  {
    name: "Flinbanan",
    level: "Röd",
    haveTried: true,
    rating: 5
  },
  {
    name: "Hällrajd",
    level: "Svart",
    haveTried: true,
    rating: 3
  },
  {
    name: "Svartberget",
    level: "Svart",
    haveTried: false,
    rating: 0
  },
  {
    name: "Organic",
    level: "Blå",
    haveTried: true,
    rating: 2
  },
  {
    name: "Rödkullestigen",
    level: "Blå",
    haveTried: true,
    rating: 1
  },
  {
    name: "Bräckebäcksleden",
    level: "Röd",
    haveTried: true,
    rating: 4
  },
  {
    name: "Månskogen",
    level: "Blå",
    haveTried: true,
    rating: 3
  },
  {
    name: "Getrappet",
    level: "Blå",
    haveTried: true,
    rating: 3
  },
  {
    name: "Ripbranten",
    level: "Svart",
    haveTried: true,
    rating: 4
  },
  {
    name: "Downhillbanan",
    level: "Svart",
    haveTried: true,
    rating: 4
  },
  {
    name: "Nelson",
    level: "Svart",
    haveTried: true,
    rating: 2
  },
  {
    name: "Rydbergs dropp",
    level: "Svart",
    haveTried: false,
    rating: 0
  },
  {
    name: "Easy Rider",
    level: "Blå",
    haveTried: true,
    rating: 3
  }
]

function App() {

  return (
    <>
      {/* Header */}
      <Header title="Cykelleder i Åre" />
      <main>
        {/* Loopa igenom BikeTrails med map */}
        {trails.map((trail, index) => (
          <BikeTrails key={index} name={trail.name} level={trail.level} haveTried={trail.haveTried} rating={trail.rating} />
        ))}
      </main>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
