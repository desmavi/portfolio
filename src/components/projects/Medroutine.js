import {PostContainer, Header, Content, Paragraph, ParagraphHeading, ParagraphBody} from '../Post'

import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack'

import medroutineFeatured from '../../img/medroutine/medroutine-featured.png'
import medroutineInt from '../../img/medroutine/med-interviews.png'
import medroutinePersona1 from '../../img/medroutine/med-persona-andrea.png'
import medroutinePersona2 from '../../img/medroutine/med-persona-irene.png'
import medroutineFlow from '../../img/medroutine/med-flow-min.png'
import medroutineWire from '../../img/medroutine/med-wireframes-min.png'
import medroutineIter1 from '../../img/medroutine/med-iter-1.png'
import medroutineIter2 from '../../img/medroutine/med-iter-2.png'
import medroutineMockup from '../../img/medroutine/med-mockup.png'
import medroutineStyle from '../../img/medroutine/med-stickersheet.png'
import medroutineGif from '../../img/medroutine/med-gif.gif'
import medroutineLP from '../../img/medroutine/med-landing.png'

import { Icon } from '@iconify/react'
import { Link, NavLink } from "react-router-dom";

export default function Medroutine(){
    return(
        <PostContainer>
            <Header title="MedRoutine" img={medroutineFeatured}/>
            <Content>
                <Paragraph>
                    <ParagraphHeading heading="Overview"/>
                    <ParagraphBody>
                        <p>L'obiettivo di questo progetto era realizzare un'app per aiutare le persone che seguono una terapia farmacologica a prendere i farmaci nel modo corretto e in orario.</p>
                        <h3>La mia soluzione</h3>
                        <p>Adottando il metodo Design Thinking, ho progettato MedRoutine.</p>
                        <p> Essa è un'app che consente agli utenti di impostare e personalizzare dei promemoria per i farmaci da prendere, supportandoli nella corretta adesione alla terapia.</p>  
                        <Image src="https://www.intesa.it/wp-content/uploads/2020/05/DesignThinking_Fasi-1.jpg" alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/>
                        <h3>Dettagli</h3>
                        <p>Progetto realizzato durante il Corso UX/UI di Google.</p>
                        <h3>Strumenti</h3>
                        <Stack direction="horizontal" gap={3} className="mb-3">
                            <Stack direction="horizontal" gap={1}>
                                <Icon icon="logos:figma" /> 
                                <p className="d-none d-md-block m-0">Figma</p>
                            </Stack>
                            <Stack direction="horizontal" gap={1}>
                                <Icon icon="logos:google-icon" />
                                <p className="d-none d-md-block m-0">Google Suite</p>
                            </Stack>    
                            <Stack direction="horizontal" gap={1}>
                                <Icon icon="logos:html-5" />    
                                <p className="d-none d-md-block m-0">HTML</p>
                            </Stack> 
                            <Stack direction="horizontal" gap={1}>
                                <Icon icon="logos:bootstrap" />
                                <p className="d-none d-md-block m-0">Bootstrap</p>
                            </Stack> 
                            <Stack direction="horizontal" gap={1}>
                                <Icon icon="vscode-icons:file-type-sass" />
                                <p className="d-none d-md-block m-0">SASS</p>
                            </Stack>
                            <Stack direction="horizontal" gap={1}>
                                <Icon icon="vscode-icons:file-type-js-official" />
                                <p className="d-none d-md-block m-0">JS</p>
                            </Stack> 
                        </Stack>                   
                    </ParagraphBody>
                </Paragraph>
                
                <Paragraph>
                    <ParagraphHeading heading="Empathize"/>
                    <ParagraphBody>
                        <p>Per prima cosa ho condotto delle interviste per validare il problema individuato (ovvero che alcune persone potrebbero avere difficoltà a seguire correttamente una terapia farmacologica), e capire gli eventuali motivi di scarsa o mancata aderenza alla terapia medica, ostacoli ed esigenze degli utenti.</p>
                        <h3>Come?</h3>
                        <p>In un primo momento, il bacino di utenti considerato era quello di persone che seguivano una terapia farmacologica. Col procedere delle interviste è però emerso come molte persone facessero affidamento al partner,familiari o a un caregiver per una corretta aderenza alla terapia. Di conseguenza ho allargato il bacino di utenti considerato.</p>
                        <Image src={medroutineInt} alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/>
                        <h3>Cosa è emerso?</h3>
                        <p>Dal campione utenti intervistato, le mie ipotesi iniziali sono state confermate, poichè è emerso che più della metà degli utenti intervistati ha dimenticato più volte di prendere delle medicine e/o ha difficoltà ad aderire alla terapia. Tra le motivazioni delle scarsa aderenza che sono emerse, troviamo: </p>
                        <ul>
                            <li>Vita frenetica</li>
                            <li>Cattiva organizzazione</li>
                            <li>Problemi di memoria</li>
                        </ul>
                        <p>Inoltre è emerso come più una terapia consti numerosi farmaci, più la difficoltà ad aderire correttamente a questa aumenti.
                        </p>
                        <p>Tra le necessità affiorate dalle interviste troviamo:</p>
                        <ul>
                            <li>Un modo semplice per poter impostare, accedere e consultare la propria terapia (o di altri)</li>
                            <li> Un modo veloce per poter ricordare se un farmaco è già stato preso o meno</li>
                            <li>Un modo discreto che avvisi l'utente quando è il momento di prendere i farmaci</li>
                        </ul>
                    </ParagraphBody>
                </Paragraph>
                
                <Paragraph>
                    <ParagraphHeading heading="Define"/>
                    <ParagraphBody>
                        <p>
                            Dopo aver sintentizzato le informazioni emerse dalle interviste ho creato delle user personas che rappresentassero il mio bacino di utenti e le loro esigenze e prendendo in considerazione il loro punto di vista ho potuto chiaramente definire i problemi da risolvere ("problem statements").  </p>
                            <Image src={medroutinePersona1} alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/>
                            <q className="quote">Andrea è un impiegato con dei piccoli problemi di salute che necessita di un modo per poter ricordare facilmente quando prendere le sue medicine, poichè segue una terapia con diverse farmaci da prendere ad orari precisi. </q>
                            <Image src={medroutinePersona2} alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/>
                            <q className="quote">Irene è un'insegnante e figlia unica, che si occupa della somministrazione delle medicine della madre. Necessita di un modo semplice e veloce per ricordare se sua madre ha già preso o no le sue medicine ogni giorno, altrimenti rischia di saltare la terapia o prenderla due volte, compromettendo la sua salute</q>
                    </ParagraphBody>
                </Paragraph>
                
                <Paragraph>
                    <ParagraphHeading heading="Ideate"/>
                    <ParagraphBody>
                        <p>Dopo aver definito i problemi da risolvere, ho cominciato a vagliare diverse soluzioni da poter implementare, partendo da queste domande:</p>
                        <p>"Cosa potremmo fare per"</p>  
                        <ul>
                            <li>Ricordare ad Andrea di prendere le medicine in tempo?</li>
                            <li>Aiutare Andrea a prendere le medicine nel modo corretto?</li>
                            <li>Aiutare Irene a ricordare se sua madre ha preso o meno le sue medicine?</li>
                        </ul>
                        <p> Inoltre analizzare i prodotti dei competitors mi ha fornito ulteriori spunti per capire cosa funziona bene, cosa non va e quali sono i gap da colmare in prodotti simili a quello che stiamo progettando. Ad esempio, è emerso che le app dei competitors</p>
                        <ul>
                            <li>Non includono features per "assegnare" pillole ad altre persone</li>
                            <li>Non consentono di caricare foto dei farmaci</li>
                            <li>Hanno un processo lungo per aggiungere un nuovo farmaco</li>
                        </ul>            
                    </ParagraphBody>
                </Paragraph>
                
                <Paragraph>
                    <ParagraphHeading heading="Prototyping"/>
                    <ParagraphBody>
                        <p>In questo progetto mi sono concentrata sul user flow principale dell'app, ovvero quello di aggiungere un nuovo farmaco e impostare il promemoria:</p>
                        <Image src={medroutineFlow} alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/>
                        <h3>Wireframes e Prototipo a Bassa fedeltà</h3>  
                        <p>Dopo aver definito la struttura globale dell'app (IA) e cosa dovranno contenere le varie schermate, ho cominciato a creare dei paper wireframes, che successivamente ho tradotto in wireframes digitali e un prototipo a bassa fedeltà, usando Figma.</p>
                        <Image src={medroutineWire} alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/>      
                    </ParagraphBody>
                </Paragraph>
                
                <Paragraph>
                    <ParagraphHeading heading="Test"/>
                    <ParagraphBody>
                        <p>Con il prototipo finalizzato, ho organizzato un Usability test, per poter ottenere dei feedback relativi al prodotto e capire come poterlo migliorare.</p>
                        <p>Ho testato il prodotto con 5 utenti, assegnando loro dei task da completare interagendo col prototipo e un questionario finale a cui rispondere (System Usability Scale).</p>
                        <a target="_blank "className="text-decoration-underline mb-3 d-inline-block" href="https://github.com/desmavi/medroutine/blob/58eca79174565781104ec45f61c4f2fdffab8869/pill%20reminder%20-%20UX%20Research%20Study%20Plan%20.pdf">Usability Study Details</a>
                        <h3>Cosa è emerso?</h3>  
                        <ul>
                            <li>Gli utenti necessitano di un modo più semplice e intuitivo per aggiungere più medicine da prendere alla stessa ora o medicine da prendere una sola volta;</li>
                            <li>Gli utenti necessitano di etichette più chiare che descrivano il campo da compilare;</li>
                            <li>Gli utenti necessitano di Checkbox più grandi per segnare un farmaco come "Preso";</li>
                        </ul>  
                    </ParagraphBody>
                </Paragraph>
                
                <Paragraph>
                    <ParagraphHeading heading="Going Hi-fi"/>
                    <ParagraphBody>
                        <p>Dopo avere iterato sui wireframes grazie alle informazioni emerse dall'usability study, ho creato dei Mockups, uno style guide e un prototipo ad altà fedeltà.</p>
                        <Image src={medroutineIter1} alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/> 
                        <Image src={medroutineIter2} alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/> 
                        <h3>Mockups</h3>  
                        <Image src={medroutineMockup} alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/> 
                        <h3>Style Guide</h3>
                        <Image src={medroutineStyle} alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/>          
                    </ParagraphBody>
                </Paragraph>
                
                <Paragraph>
                    <ParagraphHeading heading="Outcome"/>
                    <ParagraphBody className="text-center">
                        <Image src={medroutineGif} alt="" style={{maxWidth:"250px", marginBottom:"1rem"}}/> 
                        <a target="_blank "className="text-decoration-underline mb-3 "  href="https://www.figma.com/file/RQZ9ypbrhyTLkRGrSVRqRh/Pill-reminder-app?node-id=138%3A3025" style={{display:"block"}}>Visualizza il progetto su Figma</a>

                        </ParagraphBody>
                </Paragraph>
                
                <Paragraph>
                    <ParagraphHeading heading="Website"/>
                    <ParagraphBody>
                        <p>Ho poi progettato una landing page che fornisce informazioni sull'app, le sue features e informazioni per il download.</p> 
                        <Image src={medroutineLP} alt="" style={{maxWidth:"100%", marginBottom:"1rem"}}/> 
                        <p>Infine ho sviluppato la landing utlizzando HTML, Bootstrap, Sass e un pizzico di Javascript.</p>
                        <a target="_blank "className="text-decoration-underline mb-3 "  href="https://desmavi.github.io/medroutine/" style={{display:"block"}}>MedRoutine Landing Page</a>
                    </ParagraphBody>
                </Paragraph>
                
                <Paragraph>
                    <ParagraphHeading heading="Accessibilità"/>
                    <ParagraphBody>
                        <p>Durante la fase di progettazione e sviluppo sono stati adottati alcuni accorgimenti per migliorare l'accessibilità del prodotto:</p> 
                        <ul>
                            <li>Contrasto dei colori conforme al WCAG 2.1;</li>
                            <li>Uso di etichette chiare e intuitive per gli elementi cliccabili;</li>
                            <li>Ottimizzazione delle immagini;</li>
                            <li>Alt text implementato per ogni immagine</li>
                            <li>Uso di tag HTML semantici</li>
                        </ul>  
                    </ParagraphBody>
                </Paragraph>
                
                <Paragraph>
                    <ParagraphHeading heading="Takeaways"/>
                    <ParagraphBody>
                        <p>Durante la progettazione di un prodotto l'interazione con gli utenti, sin dalle prime fasi del progetto, è fondamentale. Le ipotesi non bastano e solo conoscendo gli effettivi bisogni degli utenti, possiamo ideare e sviluppare soluzioni efficaci.</p>         
                    </ParagraphBody>
                </Paragraph>
                
            </Content>
        </PostContainer>
    )
}