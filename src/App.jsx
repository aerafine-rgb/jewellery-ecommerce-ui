import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
    <Header />  
    <main  style={{padding: "1rem"}}>
      <AppRoutes />
    </main>
    <Footer />
    </>

  );

}

export default App;
