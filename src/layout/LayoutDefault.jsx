
import React from 'react'
import Header from '../layout/partials/Header';
import Footer from '../layout/partials/Footer'
function LayoutDefault({children}) {
  return (
    <>
    <div className="layout-default">
    <header className="header mb-3">
    <Header/>
    </header>
    
    <main>
        {children}
    </main>
    <footer className="footer">
    <Footer/>
    </footer>

    </div>
    </>
  )
}

export default LayoutDefault