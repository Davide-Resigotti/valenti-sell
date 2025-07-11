import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import './Info.css';

function Info() {
    return (
        <div className="main">
            <div className="projectTitle">
                <Link to="/">
                    <FaHome className='iconHome' />
                </Link>
                <h2 className='subtitles'>INFO</h2>
            </div>


            <div className="descrizione">
                <h1>
                    Vendesi Valenti SM 50 Motard, anno 2018, immatricolata il.<br />
                    Unico proprietario in quanto la moto è stata acquistata presso il concessionario ufficiale Suzuki Mazzola Moto (Bonate Sopra BG).<br />
                    Si tratta di una moto curata e tenuta con grande attenzione, pronta per essere guidata.
                </h1>
                <h1>
                    PREZZO : 3000€ trattabili
                </h1>
            </div>

            <br />
    

            <div className="pregi">
                <h2 className='subtitles'>PREGI</h2>
                <ul>
                    <li>Omologata per 2.</li>
                    <li>La moto è stata completamente smontata, pulita e rimontata con cura, mantenendo tutti i pezzi originali. L'unica modifica riguarda l'albero motore, sostituito in seguito ad una precedente elaborazione con 0 KM all’attivo !!!.</li>
                    <li>Il gruppo termico e tutti i componenti principali hanno percorso meno di 15.000 km.</li>
                    <li>Gomme al 60% Pirelli DIablo Rosso 2.</li>
                    <li>Frecce, fari anabbaglianti/abbaglianti perfettamente funzionanti.</li>
                    <li>Faro posteriore nuovo di pacca.</li>
                    <li>Manopole domino gialle nuove di pacca.</li>
                    <li>Olio Motore Motul 10W40 con 0 KM all’attivo</li>
                    <li>Liquido dei radiatori con 0 KM all’attivo</li>
                    <li>Conta chilometri originale Valenti funzionante.</li>
                    <li>La moto è stata verificata in ogni dettaglio e tutti i componenti elettrici funzionano correttamente.</li>
                    <li>Dispongo del manuale di istruzioni originale del veicolo, e libretto con i primi tagliandi.</li>
                </ul>
            </div>

            <br />

            <div className="difetti">
                <h2 className='subtitles'>DIFETTI</h2>
                <ul>
                    <li>Revisione scaduta</li>
                </ul>
            </div>

            <br />

            <div className="pezzi-a-parte">
                <h2 className='subtitles'>PEZZI A PARTE (prezzo da concordare)</h2>
                <ul>
                    <li>Scarico completo voca passaggio basso calcolata 80cc.</li>
                    <li>Tappo miscelatore originale Valenti.</li>
                    <li>Secondo radiatore originale Valenti.</li>
                </ul>
            </div>

            <br />

            <div className="conclusioni">
                <h2 className='subtitles'>CONCLUSIONI</h2>
                <p>Questo Valenti SM 50 2018 è veramente un gioiello, opportunità per chi cerca un motard in perfette condizioni.</p>
                <p>Prezzo trattabile, non esitate a contattarmi per ulteriori informazioni o per organizzare una visita.</p>
                <p>No perditempo grazie.</p>
            </div>

            <br />


        </div>

    )
}

export default Info